import React from 'react';
import { SingleTopic } from '../interfaces/topics';
import '../styles/SingleTopicCard.scss';

const SingleTopicCard = (topicData: SingleTopic) => {

  return (
    <div className = 'single-card'>
      <div className='image-container'>
      <img src={topicData.topicImg} alt="topic logo"/>
      </div>
      <span>{topicData.topicName}</span>
    </div>
  )
};

export default SingleTopicCard;