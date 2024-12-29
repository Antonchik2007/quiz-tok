import React from "react";
import '../../styles/TemplatePage.css'
import BackButton from "../profilePage/BackButton";
import StudyMaterials from "./StudyMaterials";
const TemplatePage = ({subject, pageProps, cards}) => {
    const[pageData,setPageData,currentPage,setCurrentPage,apiSuffix,setApiSuffix,selectedPage,setSelectedPage,fetching,setFetching,pageCount,setPageCount] = pageProps
const units = [
    {subject: 'Math', units: [
        {unit: 'Algebra', api: ''},
        {unit: 'Advanced Math', api: ''},
        {unit: 'Problem-Solving and Data Analysis', api: ''},
        {unit: 'Geometry and Trigonometry', api: ''}]},
    {subject: 'Reading and Writing', units: [
        {unit: 'Information and Ideas', api: 'dataForApp/SAT/English/Information%20and%20Ideas.json'},
        {unit: 'Craft and Structure', api: 'dataForApp/SAT/English/Craft%20and%20Structure.json'},
        {unit: 'Expression of Ideas', api: ''},
        {unit: 'Standard English Conventions', api: ''}]}
]

    const handleClick = (api) => {
        setApiSuffix(api)
        setSelectedPage(cards)
    }
    return(
        <div className="template-page-wrapper">
            <BackButton prevPage={<StudyMaterials pageProps={pageProps}/>} setSelectedPage={setSelectedPage}/>
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