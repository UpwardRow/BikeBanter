import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

const supabase = createClient(supabaseUrl, supabaseKey)

export async function getUserPackingItems(): Promise<string[]> {
    const { data, error } = await supabase
    .from('PackingItems')
    .select('item_id, user_id, item_name, quantity, packed, created_at')

    if (error) {
        console.error('Error fetching packing items:', error.message)
        return []
    }

    return data ? data.map(item => item.item_name as string) : []
}