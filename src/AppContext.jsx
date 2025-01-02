import React, { createContext, useContext, useState } from "react";

// Create the context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
    const [pageData, setPageData] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState(2)
    const [fetching, setFetching] = useState(true)
    const [selectedPage, setSelectedPage] = useState('')
    const [apiSuffix, setApiSuffix] = useState('dataForApp/HighSchool/Math/AP%20preCalc/Exponential%20and%20Logarithmic%20Functions.json')
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('')
    const [trigger, setTrigger] = useState(0)

  return (
    <AppContext.Provider value={{ 
        pageData,
        setPageData,
        currentPage,
        setCurrentPage,
        apiSuffix,
        setApiSuffix,
        selectedPage,
        setSelectedPage,
        fetching,
        setFetching,
        pageCount,
        setPageCount,
        isLoggedIn,
        setIsLoggedIn,
        userEmail,
        setUserEmail,
        trigger,
        setTrigger
         }}>
      {children}
    </AppContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useAppContext = () => {
  return useContext(AppContext);
};