import { createClient } from '@supabase/supabase-js'
import fs from 'fs';
import path from 'path';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

describe('Supabase Client', () => {
  const userId = 'c88000ff-db6d-4946-b258-f726938b9a50'; // Example user ID for testing
  const currentDate = new Date();
  const filePath = `uploads/${userId}/bikes/${currentDate.getTime()}-dahon-mariner-d8.jpeg`;
  const fileBuffer = fs.readFileSync(path.resolve(__dirname, 
    '../../../../../images-and-videos/dahon-mariner-d8.jpeg'));

  /*
    This test will only upload the image to the storage bucket. It does not insert any data into the database
  */
  it('should upload a bike image', async () => {
    const { data, error } = await supabase.storage
      .from('test-user-photos')
      .upload(filePath, fileBuffer, {
        contentType: 'image/jpeg',
        upsert: false // Stops overwriting existing files
      });

    console.log('Upload result:', { data, error });

    expect(error).toBeNull();
    expect(data).not.toBeNull();
  });
});