import { supabase } from '../utils/supabase-client'

export async function addUser(name: string, email: string) {
  const { data, error } = await supabase
    .from('users')
    .insert([{ name, email }])

  if (error) {
    throw new Error(`Insert failed: ${error.message}`)
  }

  return data
}
