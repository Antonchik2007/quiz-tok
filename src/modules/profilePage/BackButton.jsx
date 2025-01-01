import React from "react";
import '../../styles/BackButton.css'
import { useAppContext } from "../../AppContext";

const BackButton = ({prevPage}) => {
    const setSelectedPage = useAppContext().setSelectedPage
    return(
        <div className="button-wrapper" onClick={() => setSelectedPage(prevPage)}>
            <p className="button-text">Go back</p>
        </div>
    )
}

export default BackButton;