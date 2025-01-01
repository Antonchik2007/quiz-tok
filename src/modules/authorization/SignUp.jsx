import React, {useState} from "react";
import { auth } from '../../firebase/firebase-config'; // Import Firebase auth
import { createUserWithEmailAndPassword } from 'firebase/auth';
import '../../styles/SignUp.css';
import LogIn from "./LogIn";
import { useAppContext } from "../../AppContext";
import {handleSignUp} from './authFunctions';
const SignUp = () => {
    const {setSelectedPage, selectedPage, setUserEmail} = useAppContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    
    return(
        <div className="sign-up-wrapper">
            <div className="sign-up-inner-wrapper">
                <div className="top-section">
                    <h1 className="sign-up-text">Sign Up</h1>
                    <input type="email" className="input" placeholder="Email adress" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div className="sign-up-button" onClick={(e) => handleSignUp(e, setEmail, setPassword, email, password, setError, setSelectedPage, setUserEmail)}><p className="sign-up-button-text">Sign up</p></div>
                </div>
                <div className="bottom-section">
                    <p className="redirect-text">Already have an account?</p>
                    <p className="log-in-text" onClick={() => setSelectedPage(<LogIn/>)}>Log in</p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;