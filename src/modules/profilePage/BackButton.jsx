import React from "react";
import '../../styles/BackButton.css'

const BackButton = ({prevPage, setSelectedPage}) => {
    return(
        <div className="button-wrapper" onClick={() => setSelectedPage(prevPage)}>
            <p className="button-text">Go back</p>
        </div>
    )
}

export default BackButton;