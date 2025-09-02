import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

const supabase = createClient(supabaseUrl, supabaseKey)

export async function markPackingItemAsPacked(packingItemId: number, isPacked: boolean) {
    const { data, error } = await supabase
    .from('PackingItems')
    .update({ packed: isPacked })
    .eq('item_id', packingItemId)

    if (error) {
        console.error('Error updating packing status:', error.message)
    }
}