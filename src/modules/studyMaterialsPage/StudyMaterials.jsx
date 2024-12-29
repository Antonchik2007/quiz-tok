import React, { useState } from "react";
import './../../styles/StudyMaterials.css';
import TemplatePage from './TemplatePage.jsx'
import BackButton from "../profilePage/BackButton.jsx";
import ProfilePage from "../profilePage/ProfilePage.jsx";
const StudyMaterials = ({pageProps, cards}) => {
    const[pageData,setPageData,currentPage,setCurrentPage,apiSuffix,setApiSuffix,selectedPage,setSelectedPage,fetching,setFetching,pageCount,setPageCount] = pageProps
    const suffixes = {
        "Craft and Structure" : "dataForApp/SAT/English/Craft%20and%20Structure.json"
    }
    const [openIndex, setOpenIndex] = useState(null)


    const handleCollapse = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    const collapsibles = [
        { title: "SAT prep", content: ["Math", "Reading and Writing"] },
        { title: "High School", content: ['math', 'English'] },
      ];
    return(
        <div className="study-materials-wrapper">
            <BackButton prevPage={<ProfilePage  pageProps={pageProps}/>}  setSelectedPage={setSelectedPage}/>
            <div className="study-materials-inner-wrapper">
                <div className="study-materials-header">
                    <p className="materials-text">Study materials</p>
                    <div className="current-material">
                        <p>Current material: </p>
                        <p>currentMAt</p>
                    </div>
                </div>
                <div className="study-materials-body">

                    {collapsibles.map((collapsible, index) => {
                        return(
                            <div className="collapsible-outer-wrapper" key={index}>
                                <div className="collapsible-wrapper" onClick={() => handleCollapse(index)}>
                                    <p>{collapsible.title}</p>
                                </div>
                                {collapsible.content.map((subject, indexC) => {
                                    return(
                                        <div key={indexC} onClick={() => setSelectedPage(<TemplatePage subject={subject} pageProps={pageProps} cards={cards}/>)}className={`collapsible-content-wrapper ${openIndex === index ? "open" : ""}`}>
                                    {openIndex === index && <p className="collapsible-content-text">{subject}</p>}
                                        </div>
                                    )
                                })}
                                
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default StudyMaterials;