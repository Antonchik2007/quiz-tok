import React from "react";
import '../../styles/profilePage.css'
import StudyMaterials from "../studyMaterialsPage/StudyMaterials";
import ProgressPage from '../progressPage/ProgressPage.jsx'
import BackButton from "./BackButton.jsx";
const ProfilePage = ({pageProps, cards}) => {
    const[pageData,setPageData,currentPage,setCurrentPage,apiSuffix,setApiSuffix,selectedPage,setSelectedPage,fetching,setFetching,pageCount,setPageCount] = pageProps
    return(
        <div className="profile-page-wrapper">
            <div className="profile-page-inner-wrapper">
                <div className="profile-page-header">
                    <BackButton prevPage={cards} setSelectedPage={setSelectedPage}/>
                    <p className="profile-text">Profile</p>
                    <div className="log-in-elements">
                        <p>Account name</p>
                        <p>Log out</p>
                    </div>
                </div>
                <div className="profile-page-body">
                    <div className="profile-page-body-section" onClick={() => setSelectedPage(<StudyMaterials pageProps={pageProps} cards={cards}/>)}><p>Select study material</p></div>
                    <div className="profile-page-body-section" onClick={() => setSelectedPage(<ProgressPage/>)}><p>View progress</p></div>
                    <div className="profile-page-body-section" onClick={() => setSelectedPage('PersonalSettings')}><p>Personal settings</p></div>
                    <div className="profile-page-body-section" onClick={() => setSelectedPage('StudyMaterials')}><p>Something else</p></div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage