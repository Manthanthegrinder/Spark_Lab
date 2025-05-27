import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ubldcplrsexjcuojawph.supabase.co'; // Replace with your URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVibGRjcGxyc2V4amN1b2phd3BoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NzM1NTIsImV4cCI6MjA2MzQ0OTU1Mn0.880vs2ZxV1BiKVg82gIKKz8HUfdzAeqIcTfYF7-GD_w'; // Replace with your anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
