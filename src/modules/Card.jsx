import React, {useState, useRef, useEffect} from 'react'
import './../styles/Card.css'
import CardAnswerOption from './CardAnswerOption'

const Card = ({pageProps, pageIndex}) => {

const [pageData, setPageData, currentPage, setCurrentPage] = pageProps;


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
          {pageData?.answers?.[`item${pageIndex}`].map((answer, index) => {
            return <CardAnswerOption key={index} answerNumber={index + 1} pageData={pageData} answerText={answer} pageIndex={pageIndex}/>
          })} 
        </div>
      </div>
    </div>
  )
}

export default Card;