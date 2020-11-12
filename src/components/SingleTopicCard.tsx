import React from 'react';
import { SingleTopic } from '../interfaces/topics';
import '../styles/SingleTopicCard.scss';

const SingleTopicCard = (topicData: SingleTopic) => {

  return (
    <div className = 'single-card'>
      <img src={topicData.topicImg}/>
      <span>{topicData.topicName}</span>
    </div>
  )
};

export default SingleTopicCard;