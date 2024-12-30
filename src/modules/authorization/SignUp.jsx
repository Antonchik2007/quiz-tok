import React, {useState} from "react";
import { auth } from '../../firebase/firebase-config'; // Import Firebase auth
import { createUserWithEmailAndPassword } from 'firebase/auth';
import '../../styles/SignUp.css';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            alert('User created successfully');
        } catch(err){
            setError(err.message);
        }
        setEmail('');
        setPassword('');
    }
    return(
        <div className="sign-up-wrapper">
            <div className="sign-up-inner-wrapper">
                <div className="top-section">
                    <h1 className="sign-up-text">Sign Up</h1>
                    <input type="email" className="input" placeholder="Email adress" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div className="sign-up-button" onClick={handleSignUp}><p className="sign-up-button-text">Sign up</p></div>
                </div>
                <div className="bottom-section">
                    <p className="redirect-text">Already have an account?</p>
                    <p className="log-in-text">Log in</p>
                </div>
            </div>
        </div>
    )
}
export default SignUp;