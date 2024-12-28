import React from "react";
import '../../styles/TemplatePage.css'


const TemplatePage = ({subject}) => {

const units = [
    {subject: 'Math', units: ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5']},
    {subject: 'Reading and Writing', units: ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5']},
]

    return(
        <div className="template-page-wrapper">
            <div className="template-page-inner-wrapper">
                <div className="template-page-header">
                    <p className="profile-text">{subject}</p>
                </div>
                <div className="template-page-body">
                    {units.map((unit, index) => {
                        return(unit.subject === subject && unit.units.map((unitS, indexU) => {
                            return(<div key={indexU} className="template-page-body-section" ><p>{unitS}</p></div>)
                        }))
                        
                    })}
                </div>
            </div>
        </div>
    )
}

export default TemplatePage;