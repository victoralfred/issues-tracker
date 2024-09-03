 "use server"
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";


const oauthSignIn = async (provider: "google"| "github")=>{
    try {
        // Attempt to sign in with the selected provider
        const result = await signIn(provider, {
          callbackUrl: DEFAULT_LOGIN_REDIRECT, // Set your redirect URL after successful login
          redirect: false, // Prevent auto-redirect to handle it manually
        });
  
        if (result?.error) {
          // Handle errors (e.g., display an error message to the user)
          console.error('Error during social login:', result.error);
        } else if (result) {
          // Redirect manually if the sign-in was successful
          return result;
        }
      } catch (error) {
        console.error('Unhandled rejection during social login:', error);
      }
    };
 
export default oauthSignIn;