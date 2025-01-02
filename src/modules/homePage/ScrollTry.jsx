import React, {useEffect}from "react";
import axios from 'axios';
import { useAppContext } from "../../AppContext";
const ScrollTry = () => {

    
    const {pageData, setPageData, apiSuffix, setPageCount, setTrigger} = useAppContext();
    useEffect(() => {
        const fetchAnswers = async () => {
            console.log('Triggered');
            
            try{
                const response = await axios.get(`https://antonchik2007.github.io/DataBase/${apiSuffix}`)
                setPageData(response.data);
                console.log(pageData)
                const length = Object.keys(response.data.questions).length;
                setPageCount(length);
                
                
                
                
            }
            catch(error){
                console.error('Error fetching data', error)
            }
            setTimeout(setTrigger((prev) => prev + 1), 2000)
        }
        fetchAnswers();
    }, [apiSuffix]) //function for getting data from the API
    



    return(
        <div>
            
        </div>
    )
}

export default ScrollTry;