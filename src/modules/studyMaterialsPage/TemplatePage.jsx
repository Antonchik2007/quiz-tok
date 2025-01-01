import React from "react";
import '../../styles/TemplatePage.css'
import BackButton from "../profilePage/BackButton";
import StudyMaterials from "./StudyMaterials";
import { useAppContext } from "../../AppContext";
const TemplatePage = ({subject, cards}) => {
    const {setApiSuffix, setSelectedPage} = useAppContext()
const units = [
    {subject: 'Math', units: [
        {unit: 'Algebra', api: 'dataForApp/SAT/Math/Algebra.json'},
        {unit: 'Advanced Math', api: 'dataForApp/SAT/Math/Advanced%20Math.json'},
        {unit: 'Problem-Solving and Data Analysis', api: 'dataForApp/SAT/Math/Problem-Solving%20and%20Data%20Analysis.json'},
        {unit: 'Geometry and Trigonometry', api: 'dataForApp/SAT/Math/Geometry%20and%20Trigonometry.json'}]},
    {subject: 'Reading and Writing', units: [
        {unit: 'Information and Ideas', api: 'dataForApp/SAT/English/Information%20and%20Ideas.json'},
        {unit: 'Craft and Structure', api: 'dataForApp/SAT/English/Craft%20and%20Structure.json'},
        {unit: 'Expression of Ideas', api: 'dataForApp/SAT/English/Expression%20of%20Ideas.json'},
        {unit: 'Standard English Conventions', api: 'dataForApp/SAT/English/Standard%20English%20Conventions.json'}]}
]

    const handleClick = (api) => {
        setApiSuffix(api)
        setSelectedPage(cards)
    }
    return(
        <div className="template-page-wrapper">
            <BackButton prevPage={<StudyMaterials cards={cards}/>}/>
            <div className="template-page-inner-wrapper">
                <div className="template-page-header">
                    <p className="profile-text">{subject}</p>
                </div>
                <div className="template-page-body">
                    {units.map((unit, index) => {
                        return(unit.subject === subject && unit.units.map((unitS, indexU) => {
                            return(<div key={indexU} className="template-page-body-section" onClick={() => handleClick(unitS.api)}><p className="unit-text">{unitS.unit}</p></div>)
                        }))
                        
                    })}
                </div>
            </div>
        </div>
    )
}

export default TemplatePage;