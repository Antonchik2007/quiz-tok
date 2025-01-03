import React, { useState } from "react";
import './../../styles/StudyMaterials.css';
import TemplatePage from './TemplatePage.jsx'
import BackButton from "../profilePage/BackButton.jsx";
import ProfilePage from "../profilePage/ProfilePage.jsx";
import { useAppContext } from "../../AppContext.jsx";
const StudyMaterials = ({cards}) => {
    const setSelectedPage = useAppContext().setSelectedPage
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
            <BackButton prevPage={<ProfilePage/>}  setSelectedPage={setSelectedPage}/>
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
                                        <div key={indexC} onClick={() => setSelectedPage(<TemplatePage subject={subject} cards={cards}/>)}className={`collapsible-content-wrapper ${openIndex === index ? "open" : ""}`}>
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