import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

function isEmptyObject(obj: any) {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}

describe('Supabase Client', () => {
    let createdProfileId: string
    let user: any
    const testEmail = `testing+${Date.now()}@gmail.com`; // Create a unique email for testing

    beforeAll(async () => {
    
    // As I am creating a new user for each test, I am doing so as an admin. This bypasses the limit rate per IP address  
    const { data, error } = 
    await supabase.auth.admin.createUser({ 
      email: testEmail,
      password: "12342343"
    });

    console.log('Created user:', data)

    if (error) {
      console.error('Signup error:', error)
      throw error;
    }
        user = data?.user;
        console.log('Created user two:', data?.user)
    })

    it('should insert a new user', async () => {
        await new Promise(res => setTimeout(res, 1000)); // Wait for the user to be created
        console.log('User ID:', user?.id);
        console.log('User:', user);
        var userId = user?.id;
        console.log('User:', userId);
        const { data, error } = await supabase
        .from('Users')
        .insert([{ user_id: userId, first_name: 'Test', 
          last_name: 'User', bio: 'Testing your patience'}])
        .select('user_id, first_name, last_name, bio')
        
        if (error) {
          console.error('Insert failed:', error);
          throw error;
        } else {
          console.log('Insert succeeded:', data);
        }
        
        console.log('error:', error);
        console.log('data:', data);
        
        expect(error === null || error === undefined || 
          isEmptyObject(error)).toBe(true);  // Checking for null, undefined, or empty values
        expect(Array.isArray(data)).toBe(true); // Check data is array, not null or anything else
        expect(data).toHaveLength(1)
        createdProfileId = data![0].user_id
    })
})
