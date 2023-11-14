import { createClient } from '@supabase/supabase-js'

const URL = 'https://opwctjolgyuteqiooerq.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wd2N0am9sZ3l1dGVxaW9vZXJxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTY2NzAyOCwiZXhwIjoyMDE1MjQzMDI4fQ.j03DWGKkSy59CRvhGV7qejxFcek9pZk5aY3A2P06zbY';

export const supabase = createClient(URL, API_KEY);