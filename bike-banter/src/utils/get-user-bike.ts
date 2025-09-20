import { createClient } from '@supabase/supabase-js'
import { BikeDetails } from '@/interfaces/bike-details'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

const supabase = createClient(supabaseUrl, supabaseKey)

export async function getBikeImage(bikeId: string): Promise<BikeDetails>{

   const { data, error } = await supabase
    .from('Bikes')
    .select('bike_id, bike_name, image_url')
    .eq('bike_id', bikeId)

    if (error) {
        console.error('Error fetching bike details:', error.message)
        return {} as BikeDetails
    }

  return data[0] as BikeDetails
}