import { useEffect,useRef} from 'react'
import './App.css'
import ScrollTry from './modules/homePage/ScrollTry.jsx'
import Card from './modules/homePage/Card.jsx'
import ProfilePage from './modules/profilePage/ProfilePage.jsx'
import { useAppContext } from './AppContext.jsx'
export default function App() {


  const {setCurrentPage, setFetching, fetching, selectedPage, setSelectedPage, pageCount} = useAppContext();


  const cards = Array.from({ length: pageCount }, (_, index) => (
    <Card key={index} pageIndex={index+1}/>
  ));
  const scrollableDivRef = useRef(null)
 


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
          <ScrollTry/>
          <h1 className='app-title'>QuizTok</h1>
        </div>

        <div className='main-content-wrapper' ref={scrollableDivRef}> 
          {selectedPage || cards}
        </div>
        
        <div className="footer">
          <div className='footer-wrapper'>
            <h3 className='footer-home-button' onClick={() => setSelectedPage(cards)}>Home</h3>
            <h3 className='footer-profile-button' onClick={() => setSelectedPage(<ProfilePage cards={cards}/>)}>Profile</h3>
          </div>
        </div>
        </div>
      </div>
    </main>
  )
}
