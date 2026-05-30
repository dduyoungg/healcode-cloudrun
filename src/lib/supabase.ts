import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nflogogrfdnoyixxekde.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mbG9nb2dyZmRub3lpeHhla2RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxMzk0ODMsImV4cCI6MjA5NTcxNTQ4M30.n4f_df0kjHZVyTnbnIsPl3vTFx5IBV8ji8iImccY8dY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
