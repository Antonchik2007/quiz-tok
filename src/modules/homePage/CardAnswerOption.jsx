import React, {useEffect, useRef, useState} from "react";
import './../../styles/CardAnswerOption.css'
import confetti from 'canvas-confetti'; 
import { db } from "../../firebase/firebase-config";
import { updateDoc, doc, arrayUnion } from "firebase/firestore";
import { useAppContext } from "../../AppContext";

const CardAnswerOption = ({answerNumber, answerText, pageData, pageIndex, questionText}) => {
    const userEmail = useAppContext().userEmail;
    const answerTextRef = useRef(null);
    const cardAnswerOption = useRef(null);

    const [questionOption, setQuestionOption] = useState(' ')
    const [isDisabled, setIsDisabled] = useState(false)
   
    const updateAnswer = async (color) => {
      const userRef = doc(db, "users", userEmail);
      await updateDoc(userRef, {
        "Study_materials": arrayUnion({[questionText.replace(/[~*/[\]]/g, "_") + answerText.replace(/[~*/[\]]/g, "_")]: color})
      })
    }
    
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
            setIsDisabled(true)
            confetti({
              particleCount: 400,
              spread: 200,
              startVelocity: 45,
              origin: {y: 0.6}
            })
          }
        }
        else{  
          if (cardAnswerOption.current) {
            cardAnswerOption.current.style.backgroundColor = 'red'
            setIsDisabled(true)
          }
        }
        try {
          updateAnswer(cardAnswerOption.current.style.backgroundColor)
        } catch (error){
          console.log(error.message)
          alert(error.message)
          console.log(userEmail);
          
        }
      }

    return(
        <div className={`card-answer-option ${isDisabled ? "disabled" : ""}`} onClick={!isDisabled ? checkAnswer : undefined} ref={cardAnswerOption}>
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