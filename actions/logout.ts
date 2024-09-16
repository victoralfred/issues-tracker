import {auth, signOut} from '@/auth';

export const logout =async()=>{
    // Get an instance of auth, and if the user is loged out, they should not be able to access dashboard
    const session = await auth();
}