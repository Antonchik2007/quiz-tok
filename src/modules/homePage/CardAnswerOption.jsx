import React, {useEffect, useRef, useState} from "react";
import './../../styles/CardAnswerOption.css'
import confetti from 'canvas-confetti'; 
import { db } from "../../firebase/firebase-config";
import { updateDoc, doc, arrayUnion, getDoc } from "firebase/firestore";
import { useAppContext } from "../../AppContext";


const CardAnswerOption = ({answerNumber, answerText, pageData, pageIndex, questionText}) => {
    const {userEmail, trigger} = useAppContext()
    const answerTextRef = useRef(null);
    const cardAnswerOption = useRef(null);
    const [questionOption, setQuestionOption] = useState(' ')
    const [isDisabled, setIsDisabled] = useState(false)
    const [background, setBackground] = useState(null)
    
    const updateUploadAnswer = async (color) => {
      const userRef = doc(db, "users", userEmail);
      await updateDoc(userRef, {
        "Study_materials": arrayUnion({[questionText.replace(/[~*/[\]]/g, "_") + answerText.replace(/[~*/[\]]/g, "_")]: color})
      })
    }

    // Algorithm: Take the page data -> take questions n + answers n.map() => generate a key that will be used to look up the value in db => if the value exists, apply it to the style, if it doesn't do nothing. 

    const updateDownloadAnswer = async () => { 
      
      if(userEmail !== ''){
        const userRef = doc(db, "users", userEmail);
      try{
        const docSnap = await getDoc(userRef);

        if(docSnap.exists()){
          const data = docSnap.data();
          
          if(Array.isArray(data["Study_materials"])){
            const array = data["Study_materials"];

            for (const obj of array){
              if(obj[questionText.replace(/[~*/[\]]/g, "_") + answerText.replace(/[~*/[\]]/g, "_")] !== undefined){
                console.log('updated');
                
                setBackground(obj[questionText.replace(/[~*/[\]]/g, "_") + answerText.replace(/[~*/[\]]/g, "_")])
                
                return null;
                
              } else{
                
              }
            }
          }
        }
      } catch(err){
        console.log(err.message);
      }
      }//this function downloads the answers value for the current element.
      
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
      cardAnswerOption.current.style.backgroundColor = background;
    }, [background])

    useEffect (() => {
          updateDownloadAnswer()
    }, [trigger, questionText, answerText])


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
          updateUploadAnswer(cardAnswerOption.current.style.backgroundColor)
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