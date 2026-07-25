import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.PUBLIC_SUPABASE_URL;
const key = import.meta.env.PUBLIC_SUPABASE_KEY;

// Fail-open, à semelhança do luma.ts e do calcom.ts: sem credenciais o
// build continua a passar (a loja fica simplesmente vazia) em vez de
// rebentar o deploy do site inteiro por causa de uma secção.
export const supabase: SupabaseClient | null =
  url && key ? createClient(url, key) : null;

if (!supabase) {
  console.warn(
    '[supabase] PUBLIC_SUPABASE_URL/PUBLIC_SUPABASE_KEY em falta, a loja fica vazia neste build.'
  );
}
