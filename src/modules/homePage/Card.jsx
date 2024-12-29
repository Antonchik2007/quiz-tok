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
const questionTextRef = useRef(null);
const [pageData, setPageData, currentPage, setCurrentPage] = pageProps;
const [shuffledAnswers, setShuffledAnswers] = useState([]);

useEffect(() => {
  const answerLenght = pageData?.questions?.[`item${pageIndex}`].length;
  let fontSize = '1.5rem';
  if (answerLenght > 70){
    fontSize = '1.2rem'
  }
  if(questionTextRef.current){
    questionTextRef.current.style.fontSize = fontSize;
  }
  
  
}, [pageData?.questions?.[`item${pageIndex}`]])
useEffect(() => {
  setShuffledAnswers(shuffleArray([...pageData?.answers?.[`item${pageIndex}`] || []]));
}, [pageData])

  return(
    <div className='card-outer-wrapper'>

      <div className="card-top">
        <div className="question-title">
          <div className="question-word-wrapper"><h2 className='question-word'>Question: </h2></div>
          <div className="question-wrapper">
            <p className='question-text' ref={questionTextRef}>{pageData?.questions?.[`item${pageIndex}`] || 'error loading data'}</p>
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