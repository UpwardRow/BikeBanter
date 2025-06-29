import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

function isEmptyObject(obj: any) {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}

describe('Supabase Client', () => {
    let createdPackingItemId: string;
    let user: any;
    // Initialize test email for testing
    const testEmail = 'testing+1750005720751@gmail.com';
    let userId: any;
    let currentDate = new Date();
    let createdAt = currentDate.toISOString();

    beforeAll(async () => {

        /*
            Probably not the best way to do this, as it will get all users, but for testing purposes it works. 
            GetUserByEmail() is deprecated. Thanks supabase
        */
        const { data, error } = await supabase.auth.admin.listUsers();

        if (error) {
            console.error('Error listing users', error.message)
            throw error;
        } else {
            user = data.users.find(u => u.email === testEmail);
            if (user) {
                console.log('User ID:', userId = user.id);
            } else {
                console.log('User not found.');
            }
        }
    }) 

    it('should insert a new packing item', async () => {
        const { data, error } = await supabase
            .from('PackingItems')
            .insert([{ user_id: userId, item_name: 'Test Item', 
                quantity: 1, packed: true, created_at: createdAt }])
            .select('item_id, user_id, item_name, quantity, packed, created_at')

        expect(error === null || error === undefined || 
            isEmptyObject(error)).toBe(true);  // Checking for null, undefined, or empty values
        expect(Array.isArray(data)).toBe(true); // Check data is array, not null or anything else
        expect(data).toHaveLength(1)
        createdPackingItemId = data![0].item_id
    })
})