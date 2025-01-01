import React, {useState} from "react";
import '../../styles/SignUp.css';
import SignUp from "./SignUp";
import { useAppContext } from "../../AppContext";
import {handleLogIn} from './authFunctions';
const LogIn = () => {
    const {setSelectedPage, setIsLoggedIn, setUserEmail} = useAppContext()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    
    return(
        <div className="sign-up-wrapper">
            <div className="sign-up-inner-wrapper">
                <div className="top-section">
                    <h1 className="sign-up-text">Log in</h1>
                    <input type="email" className="input" placeholder="Email adress" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div className="sign-up-button" onClick={(e) => handleLogIn(e, setEmail, setPassword, email, password, setError, setIsLoggedIn, setUserEmail)}><p className="sign-up-button-text">Log in</p></div>
                </div>
                <div className="bottom-section">
                    <p className="redirect-text">Don't have an account?</p>
                    <p className="log-in-text" onClick={() => setSelectedPage(<SignUp/>)}>Sign up</p>
                </div>
            </div>
        </div>
    )
}
export default LogIn;