import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

const supabase = createClient(supabaseUrl, supabaseKey)

export async function UploadUserBike(bikeImage: File) {

     const { data, error } = await supabase.storage
      .from('test-user-photos')
      .upload(`uploads/${bikeImage.name}`, bikeImage, {
        upsert: false
      });

    if (error) {
      console.error('Error uploading bike image:', error.message);
      return;
    }

    console.log('Bike image uploaded successfully:', data);
}