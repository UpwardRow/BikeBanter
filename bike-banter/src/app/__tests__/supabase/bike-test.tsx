import { createClient } from '@supabase/supabase-js'
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

describe('Supabase Client', () => {
  const bikeId = uuidv4() // Generate a unique bike ID for testing
  const userId = '000fe1c5-6286-4176-9cd8-485239e9792c'; // Example user ID for testing
  const currentDate = new Date();
  const filePath = `uploads/${userId}/bikes/${currentDate.getTime()}-dahon-mariner-d8.jpeg`;
  const fileBuffer = fs.readFileSync(path.resolve(__dirname, 
    '../../../../../images-and-videos/dahon-mariner-d8.jpeg'));
  
  // Cleanup after tests
  afterAll(async () => {
    // Delete file from storage
    await supabase.storage.from('test-user-photos').remove([filePath]);

    // Delete row from DB
    await supabase.from('Bikes').delete().eq('bike_id', bikeId);

    console.log('Cleanup completed: File removed from storage and row deleted from Bikes table.');
  });

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

  it('should link bike image to user', async () => {
    const { data, error } = await supabase
      .from('Bikes')
      .insert([{
        bike_id: bikeId,
        user_id: userId,
        bike_name: 'Dahon Mariner D8',
        image_url: filePath,
      }])
      .select('bike_id, user_id, bike_name, image_url');

    console.log('Insert result:', { data, error });

    expect(error).toBeNull();
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
  })
});