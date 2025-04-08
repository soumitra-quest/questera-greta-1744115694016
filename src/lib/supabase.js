import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qfbtwcscawclnmglousd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmYnR3Y3NjYXdjbG5tZ2xvdXNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyMTI2NDIsImV4cCI6MjA1Nzc4ODY0Mn0.5K9fwve0OQh49ONDS-ZPyC5vzb67DROrDc5HwwPMCpI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);