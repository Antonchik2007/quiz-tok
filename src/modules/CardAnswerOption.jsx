import React, {useEffect, useRef, useState} from "react";
import './../styles/CardAnswerOption.css'
import confetti from 'canvas-confetti'; 

const CardAnswerOption = ({answerNumber, answerText, pageData, pageIndex, setIsTinted}) => {

    const answerTextRef = useRef(null);
    const cardAnswerOption = useRef(null);

    const [questionOption, setQuestionOption] = useState(' ')
   
    
    useEffect(() => {
      switch (answerNumber) {
        case 1:
          setQuestionOption('a)');
          break;
        case 2:
          setQuestionOption('b)');
          break;
        case 3:
          setQuestionOption('c)');
          break;
        case 4:
          setQuestionOption('d)');
          break;
        default:
          setQuestionOption('error'); // Optional default case
      }
      
      
    }, [answerNumber])

    useEffect(() => {
        const textLength = answerText.length
        let fontSize = '1.5rem' // Default font size
        let marginR = '5vw'
        if (textLength > 80) {
          fontSize = '1rem';
          marginR = '2vw';
        } else if (textLength > 40) {
          fontSize = '1rem';
          marginR = '2vw';
        } else if (textLength > 20) {
          fontSize = '1.3rem';
          marginR = '5vw';
        }else if (textLength < 20) {
          marginR = '10vw';
        }
    
        if (answerTextRef.current) {
          answerTextRef.current.style.fontSize = fontSize
          answerTextRef.current.style.marginRight = marginR
        }
      }, [answerText])


      const checkAnswer = () => {
        
        if(answerText === pageData?.correctAnswers?.[`item${pageIndex}`]){ 
          if (cardAnswerOption.current) {
            cardAnswerOption.current.style.backgroundColor = 'green'
            confetti({
              particleCount: 300,
              spread: 140,
              startVelocity: 45,
              origin: {y: 0.6}
            })
          }
        }
        else{  
          if (cardAnswerOption.current) {
            cardAnswerOption.current.style.backgroundColor = 'red'
          }
        }
      }

    return(
        <div className="card-answer-option" onClick={checkAnswer} ref={cardAnswerOption}>
            <div className="select-answer-button-wrapper">
                <p className='select-answer-button'>{questionOption}</p>
            </div>
            
            <div className="answer-text-wrapper">
                <p className='answer-text' ref={answerTextRef}>{answerText}</p>
            </div>
        </div>
    )
}

export default CardAnswerOption;