import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/CardsCollection.scss';
import SingleTopicCard from './SingleTopicCard';

const CardsCollection = () => {

  const history = useHistory()

const topicData = [
  {
    topicName: 'HTML',
    topicImg: 'https://d2sx6a0csu239t.cloudfront.net/wp-content/uploads/2018/07/31120326/Javascript.png',
    id: 1,
  },
  {
    topicName: 'JS',
    topicImg: 'https://d2sx6a0csu239t.cloudfront.net/wp-content/uploads/2018/07/31120326/Javascript.png',
    id: 2,
  },
  {
    topicName: 'REACT',
    topicImg: 'https://d2sx6a0csu239t.cloudfront.net/wp-content/uploads/2018/07/31120326/Javascript.png',
    id: 3,
  },
  {
    topicName: 'CSS',
    topicImg: 'https://d2sx6a0csu239t.cloudfront.net/wp-content/uploads/2018/07/31120326/Javascript.png',
    id: 4,
  }
]

const navigateToTopic = (topicId: number) => {
  let path = `/topic/${topicId}`
  history.push(path);
}

const getTopicCards = () => {
  return topicData.map((topic) => (
    <div className='topic-card' onClick={() => navigateToTopic(topic.id)}>
      <SingleTopicCard {...topic}></SingleTopicCard> 
    </div>
  ))
}

return (
  <div className='cards'>
    {getTopicCards()}
  </div>
)
}

export default CardsCollection;