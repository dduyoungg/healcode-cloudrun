import { createClient } from "@supabase/supabase-js";

type ViteEnv = {
  env?: {
    VITE_SUPABASE_URL?: string;
    VITE_SUPABASE_ANON_KEY?: string;
  };
};

const viteEnv = import.meta as unknown as ViteEnv;

const supabaseUrl =
  viteEnv.env?.VITE_SUPABASE_URL || "https://example.supabase.co";

const supabaseAnonKey =
  viteEnv.env?.VITE_SUPABASE_ANON_KEY || "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const isSupabaseConfigured =
  Boolean(viteEnv.env?.VITE_SUPABASE_URL) &&
  Boolean(viteEnv.env?.VITE_SUPABASE_ANON_KEY);
