import React, {useEffect}from "react";
import axios from 'axios';
const ScrollTry = ({pageProps, apiSuffix}) => {

    const [pageData, setPageData, currentPage, setCurrentPage, setApiSuffix] = pageProps;

    useEffect(() => {
        const fetchAnswers = async () => {
            try{
                const response = await axios.get(`https://antonchik2007.github.io/DataBase/${apiSuffix}`)
                setPageData(response.data);
                console.log(pageData)
                
            }
            catch(error){
                console.error('Error fetching data', error)
            }
        }
        fetchAnswers();
    }, [apiSuffix]) //function for getting data from the API
    



    return(
        <div>
            
        </div>
    )
}

export default ScrollTry;