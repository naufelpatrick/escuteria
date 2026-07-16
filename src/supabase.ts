import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(url && anonKey)
export const supabase = isSupabaseConfigured ? createClient(url, anonKey) : null

export async function submitDemoRequest(data: { nome:string; cargo:string; escola:string; email:string; mensagem:string }) {
  if (!supabase) throw new Error('Supabase ainda não configurado.')
  const { error } = await supabase.from('demo_requests').insert(data)
  if (error) throw error
}

export async function subscribeNewsletter(email:string) {
  if (!supabase) throw new Error('Supabase ainda não configurado.')
  const { error } = await supabase.from('subscribers').insert({ email:email.trim().toLowerCase(), source:'blog' })
  if (error && error.code !== '23505') throw error
}
