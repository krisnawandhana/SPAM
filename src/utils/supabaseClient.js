import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://wtedpdjedmuniobuxwgi.supabase.co'; // Ganti dengan URL Supabase kamu
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0ZWRwZGplZG11bmlvYnV4d2dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1OTU5NjAsImV4cCI6MjA1NzE3MTk2MH0.ihzzbZV5YAamKx3EUlUBMvrIemGofsY_Q7PPwM6wDGA'; // Ganti dengan API Key Supabase kamu

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
