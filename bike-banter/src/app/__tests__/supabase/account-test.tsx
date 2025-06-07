import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

describe('Supabase Client', () => {
    let createdProfileId: string
    
    it('should insert a new user', async () => {
        const { data, error } = await supabase
        .from('users')
        .insert([
            {
            first_name: 'Test',
            last_name: 'User',
            bio: 'Testing your patience',
            },
        ])
        .select()
        
        expect(error).toBeNull()
        expect(data).toHaveLength(1)
        createdProfileId = data![0].id
    })
})
