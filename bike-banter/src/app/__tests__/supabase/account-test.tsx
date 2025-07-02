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
      // I am creating a new user for each test, I am doing so as an admin. This bypasses the limit rate per IP address  
      const { data, error } = 
      await supabase.auth.admin.createUser({ 
        email: testEmail,
        password: "12342343"
      });

      if (error) {
        console.error('Signup error:', error)
        throw error;
      }
      user = data?.user;
      console.log('Created user:', data?.user)
    })

    afterAll(async () => {
      // Cleanup: Delete the user created for testing
      if (user) {
        const { error } = await supabase.auth.admin.deleteUser(user.id);
        if (error) {
          console.error('Error deleting user:', error);
        } else {
          console.log('Cleanup completed: User deleted successfully');
        }
      }
    })

    it('should insert a new user', async () => {
        await new Promise(res => setTimeout(res, 1000)); // Wait for the user to be created
        var userId = user?.id;
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
        
        expect(error === null || error === undefined || 
          isEmptyObject(error)).toBe(true);  // Checking for null, undefined, or empty values
        expect(Array.isArray(data)).toBe(true); // Check data is array, not null or anything else
        expect(data).toHaveLength(1)
        createdProfileId = data![0].user_id
    })
})
