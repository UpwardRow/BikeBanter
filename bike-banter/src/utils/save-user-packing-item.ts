import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

const supabase = createClient(supabaseUrl, supabaseKey)

export async function saveUserPackingItems(user_item: string) {
    let userId: any;
    let createdAt = new Date().toISOString();

    const { data, error } = await supabase
    .from('PackingItems')
    .insert([{ user_id: userId, item_name: user_item, 
        quantity: 1, packed: false, created_at: createdAt }])
        .select('item_id, user_id, item_name, quantity, packed, created_at')

    if (error) {
        console.error('Error inserting packing items:', error.message)
    } else {
        console.log('Inserted packing item:', data)
    }
}