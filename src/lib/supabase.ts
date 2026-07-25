import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.PUBLIC_SUPABASE_URL;
const key = import.meta.env.PUBLIC_SUPABASE_KEY;

if (!url || !key) {
  throw new Error(
    'PUBLIC_SUPABASE_URL / PUBLIC_SUPABASE_KEY em falta — copia .env.example para .env e preenche.'
  );
}

export const supabase = createClient(url, key);
