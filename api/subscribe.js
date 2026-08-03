// Vercel Serverless Function (Node.js) -- recebe o POST do formulário de
// newsletter (Community.astro) e acrescenta uma linha na Google Sheet de
// subscritores. Site é estático (Astro SSG), por isso isto vive fora do
// build do Astro, na pasta /api -- a Vercel deteta e publica qualquer coisa
// aqui como função serverless, independente da framework.
//
// Autenticação: conta de serviço Google (JWT Bearer flow, assinado à mão com
// o módulo `crypto` do Node -- sem dependências extra só para isto). As
// credenciais nunca ficam no repo: vêm de variáveis de ambiente só do
// servidor (sem prefixo PUBLIC_, ver .env.example):
//   GOOGLE_SHEETS_CLIENT_EMAIL
//   GOOGLE_SHEETS_PRIVATE_KEY
//   GOOGLE_SHEETS_SPREADSHEET_ID
//
// A conta de serviço tem de ter acesso de Editor à sheet (partilhar
// manualmente no Google Sheets -- uma API key sozinha não dá acesso a
// ficheiros que não lhe foram explicitamente partilhados).

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function base64url(buf) {
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function getAccessToken() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');
  if (!clientEmail || !privateKey) {
    throw new Error('missing GOOGLE_SHEETS_CLIENT_EMAIL / GOOGLE_SHEETS_PRIVATE_KEY');
  }

  const { sign } = await import('node:crypto');
  const now = Math.floor(Date.now() / 1000);

  const header = base64url(Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })));
  const claims = base64url(
    Buffer.from(
      JSON.stringify({
        iss: clientEmail,
        scope: 'https://www.googleapis.com/auth/spreadsheets',
        aud: 'https://oauth2.googleapis.com/token',
        iat: now,
        exp: now + 3600,
      })
    )
  );
  const signingInput = `${header}.${claims}`;
  const signature = base64url(sign('RSA-SHA256', Buffer.from(signingInput), privateKey));
  const jwt = `${signingInput}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });
  if (!res.ok) {
    throw new Error(`token exchange failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return data.access_token;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method not allowed' });
    return;
  }

  const { email, website } = req.body ?? {};

  // Honeypot: campo escondido no form, só bots o preenchem.
  if (website) {
    res.status(200).json({ ok: true });
    return;
  }

  if (typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
    res.status(400).json({ error: 'invalid email' });
    return;
  }

  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  if (!spreadsheetId) {
    console.error('[subscribe] missing GOOGLE_SHEETS_SPREADSHEET_ID');
    res.status(500).json({ error: 'server not configured' });
    return;
  }

  try {
    const accessToken = await getAccessToken();
    const sheetsRes = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A:B:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [[email.trim(), new Date().toISOString()]],
        }),
      }
    );

    if (!sheetsRes.ok) {
      console.error('[subscribe] sheets append failed:', sheetsRes.status, await sheetsRes.text());
      res.status(502).json({ error: 'failed to save subscriber' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[subscribe] error:', err);
    res.status(500).json({ error: 'internal error' });
  }
}
