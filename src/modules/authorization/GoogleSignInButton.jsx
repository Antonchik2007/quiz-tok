import React from "react";
import { auth, googleProvider } from '../../firebase/firebase-config.js';
import { signInWithRedirect } from 'firebase/auth';
import GoogleButton from 'react-google-button'
const GoogleSignInButton = () => {

    const handleGoogleSignIn = () => { //not working, will come back later:(
        console.log("Redirecting to Google Sign-In...");
        signInWithRedirect(auth, googleProvider);
      };
    return(
        <GoogleButton onClick={handleGoogleSignIn}/>
        
    )
}

export default GoogleSignInButton;