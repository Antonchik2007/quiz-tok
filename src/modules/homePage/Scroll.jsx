import React from 'react'
import InfiniteScroll from "react-infinite-scroll-component";

const Scroll = () =>{
  
  const [photos, setPhotos] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  


  useEffect(() =>{
    if(fetching){
      console.log('fetching')
      axios.get(`https://antonchik2007.github.io/DataBase/`)
        .then(response => {
        setPhotos([...photos, ...response.data])
        setCurrentPage(prevState => prevState + 1)
        })
        .finally(() => setFetching(false))
    }

  }, [fetching])


  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return function (){
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (e) =>{
    if(e.target.documentElement.scrollHeight-    (e.target.documentElement.scrollTop + window.innerHeight) < 100){
      setFetching(true)
    }
  }
}
export default Scroll;