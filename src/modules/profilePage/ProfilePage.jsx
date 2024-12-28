import React from "react";
import '../../styles/profilePage.css'
import StudyMaterials from "../studyMaterialsPage/StudyMaterials";
import ProgressPage from '../progressPage/ProgressPage.jsx'
const ProfilePage = ({pageProps, setSelectedPage, setApiSuffix, apiSuffix}) => {
    return(
        <div className="profile-page-wrapper">
            <div className="profile-page-inner-wrapper">
                <div className="profile-page-header">
                    <p className="profile-text">Profile</p>
                    <div className="log-in-elements">
                        <p>Account name</p>
                        <p>Log out</p>
                    </div>
                </div>
                <div className="profile-page-body">
                    <div className="profile-page-body-section" onClick={() => setSelectedPage(<StudyMaterials setApiSuffix={setApiSuffix} apiSuffix={apiSuffix} setSelectedPage={setSelectedPage}/>)}><p>Select study material</p></div>
                    <div className="profile-page-body-section" onClick={() => setSelectedPage(<ProgressPage/>)}><p>View progress</p></div>
                    <div className="profile-page-body-section" onClick={() => setSelectedPage('PersonalSettings')}><p>Personal settings</p></div>
                    <div className="profile-page-body-section" onClick={() => setSelectedPage('StudyMaterials')}><p>Something else</p></div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage