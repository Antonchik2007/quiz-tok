import { useEffect, useState, useRef } from 'react'
import './App.css'
import ScrollTry from './modules/ScrollTry.jsx'
import Card from './modules/Card.jsx'
export default function App() {
 
  const [pageData, setPageData] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [pageCount, setPageCount] = useState(2)
  const [fetching, setFetching] = useState(true)
  const pageProps = [pageData, setPageData, currentPage, setCurrentPage]

  const scrollableDivRef = useRef(null)




  const cards = Array.from({ length: pageCount }, (_, index) => (
    <Card key={index} pageProps={pageProps} pageIndex={index+1}/>
  ));
  



  useEffect(() => {
    
    if(fetching){
      setCurrentPage(prevState => prevState + 1)
      setFetching(false)
    }
  }, [fetching])



  useEffect(() => {
    const divElement = scrollableDivRef.current;

    if (divElement) {
      divElement.addEventListener('scroll', scrollHandler);
    }

    // Cleanup the event listener
    return () => {
      if (divElement) {
        divElement.removeEventListener('scroll', scrollHandler);
      }
    };
  }, []);


  const scrollHandler = () => {
    if (scrollableDivRef.current) {
      const div = scrollableDivRef.current;
      const scrollTop = div.scrollTop; // How much has been scrolled
      const fullHeight = div.scrollHeight; // Total height of the content
      const visibleHeight = div.clientHeight; // Visible height of the div


      // Calculate current page based on full div length
      if(scrollTop%visibleHeight === 0){
        setPageCount(scrollTop/visibleHeight + 3) //the plus indicates how many more pages we want to load on top
        setFetching(true)
        console.log('Done');
      }

    }
  };

  return (
    <main>
      <div className='main-container'>
        <div className="secondary-container">
        <div className='header'>
          <ScrollTry pageProps={pageProps}/>
          <h1 className='app-title'>QuizTok</h1>
        </div>

        <div className='main-content-wrapper' ref={scrollableDivRef}> 
          {cards}
        </div>
        
        <div className="footer">
          <div className='footer-wrapper'>
            <h3 className='footer-home-button'>Home</h3>
            <h3 className='footer-profile-button'>Profile</h3>
          </div>
        </div>
        </div>
      </div>
    </main>
  )
}
