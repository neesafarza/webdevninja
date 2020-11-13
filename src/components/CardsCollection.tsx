import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/CardsCollection.scss';
import SingleTopicCard from './SingleTopicCard';

const CardsCollection = () => {

  const history = useHistory()

const topicData = [
  {
    topicName: 'HTML',
    topicImg: 'https://icon-library.com/images/html5-icon/html5-icon-13.jpg',
    id: 1,
  },
  {
    topicName: 'JS',
    topicImg: 'https://cdn.clipart.email/63af143a4e3d3b83a6d5c5b086f4b212_java-vs-javascript-differences-between-java-and-javascript-edureka_444-486.png',
    id: 2,
  },
  {
    topicName: 'REACT',
    topicImg: 'https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png',
    id: 3,
  },
  {
    topicName: 'CSS',
    topicImg: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
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