import React, {useState, useRef, useEffect} from 'react'
import './../../styles/Card.css'
import CardAnswerOption from './CardAnswerOption'

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Card = ({pageProps, pageIndex}) => {

const [pageData, setPageData, currentPage, setCurrentPage] = pageProps;
const [shuffledAnswers, setShuffledAnswers] = useState([]);


useEffect(() => {
  setShuffledAnswers(shuffleArray([...pageData?.answers?.[`item${pageIndex}`] || []]));
}, [pageData])

  return(
    <div className='card-outer-wrapper'>

      <div className="card-top">
        <div className="question-title">
          <div className="question-word-wrapper"><h2 className='question-word'>Question: </h2></div>
          <div className="question-wrapper">
            <p className='question-text'>{pageData?.questions?.[`item${pageIndex}`] || 'hello'}</p>
          </div>  
        </div>
      </div>

      <div className="card-bottom">
        <div className="card-answer-options">
          {shuffledAnswers.map((answer, index) => {
            return <CardAnswerOption key={index} answerNumber={index + 1} pageData={pageData} answerText={answer} pageIndex={pageIndex}/>
          })} 
        </div>
      </div>
    </div>
  )
}

export default Card;