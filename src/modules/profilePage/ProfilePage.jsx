import React from "react";
import '../../styles/profilePage.css'
import StudyMaterials from "../studyMaterialsPage/StudyMaterials";
import ProgressPage from '../progressPage/ProgressPage.jsx'
import BackButton from "./BackButton.jsx";
import SignUp from "../authorization/SignUp.jsx";
import { useAppContext } from "../../AppContext.jsx";
import { handleLogout } from "../authorization/authFunctions.js";
const ProfilePage = ({cards}) => {
    const {setSelectedPage, isLoggedIn, setIsLoggedIn, userId} = useAppContext()
    return(
        <div className="profile-page-wrapper">
            <div className="profile-page-inner-wrapper">
                <div className="profile-page-header">
                    <BackButton prevPage={cards} setSelectedPage={setSelectedPage}/>
                    <p className="profile-text">Profile</p>
                    <div className="log-in-elements">
                        <p>Account name</p>
                        {isLoggedIn ? (<p onClick={() => handleLogout(setIsLoggedIn)}>Sign out</p>) : (<p onClick={() => setSelectedPage(<SignUp />)}>Sign up</p>)}
                    </div>
                </div>
                <div className="profile-page-body">
                    <div className="profile-page-body-section" onClick={() => setSelectedPage(<StudyMaterials cards={cards}/>)}><p>Select study material</p></div>
                    <div className="profile-page-body-section" onClick={() => setSelectedPage(<ProgressPage/>)}><p>View progress</p></div>
                    <div className="profile-page-body-section" onClick={() => console.log(userId)}><p>Personal settings</p></div>
                    <div className="profile-page-body-section" onClick={() => setSelectedPage('StudyMaterials')}><p>Something else</p></div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage