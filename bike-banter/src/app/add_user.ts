// src/pages/addUser.ts
import { addUser } from '../services/user_service'

async function run() {
  try {
    const newUser = await addUser('Adam', 'adam@example.com')
    console.log('User inserted:', newUser)
  } catch (err) {
    console.error('User was not able to be inserted:', err)
  }
}

run()
