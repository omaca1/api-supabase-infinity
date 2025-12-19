import { createClient } from '@supabase/supabase-js';

// Estas claves deben ir en variables de entorno en producción
const supabaseUrl = 'https://tu-instancia.supabase.co';
const supabaseKey = 'tu-clave-publica-o-secreta';

export const supabase = createClient(supabaseUrl, supabaseKey);
