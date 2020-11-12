import React from 'react';
import { TopicQuestion } from '../interfaces/topics';
import '../styles/TopicQuestionComponent.scss'

type TopicQuestionProps = {
  currentQuestion: TopicQuestion,
  reveal: boolean,
  setReveal: any
}

const TopicQuestionComponent = (props: TopicQuestionProps) => {

  return (
    <div className='divcontainer'>
      <div className='topic question'>
        <h2>{props.currentQuestion.question}</h2>
      </div>
      {props.reveal === false ? (
      <div className='topic before'>
        <button onClick={() => props.setReveal(true)}>Click to reveal</button>
        </div>
      ) : (
        <div className='topic after'>
        <h2>{props.currentQuestion.answer}</h2>
        </div>
      )}
    </div>
  )
}

export default TopicQuestionComponent;