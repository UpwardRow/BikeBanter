import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)


function isEmptyObject(obj: any) {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}

describe('Supabase Client', () => {
    let createdProfileId: string
    let user: any
    // Create a unique email for testing
    const testEmail = `testing+${Date.now()}@gmail.com`;

    beforeAll(async () => {
    const { data, error } = await supabase.auth.signUp({ email: testEmail, password: "12342343" });

    if (error) {
      console.error('Signup error:', error)
      throw error;
    }
        user = data.user;
    })

    it('should insert a new user', async () => {
        const { data, error } = await supabase
        .from('users')
        .insert([{ user_id: user!.id, first_name: 'Test', last_name: 'User', bio: 'Testing your patience'}])
        .select('id, user_id, first_name, last_name, bio')
        
        console.log('error:', error);
        console.log('data:', data);
        
        expect(error === null || error === undefined || 
            isEmptyObject(error)).toBe(true);  // Checking for null, undefined, or empty values
        expect(Array.isArray(data)).toBe(true); // Check data is array, not null or anything else
        expect(data).toHaveLength(1)
        createdProfileId = data![0].id
    })
})
