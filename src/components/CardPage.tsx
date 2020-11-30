import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopicQuestionComponent from "./TopicQuestionComponent";
import '../styles/CardPage.scss'
import { getQuestions } from "../service/ApiService";
import { TopicQuestion } from "../interfaces/topics";
import Button from "react-bootstrap/Button";

type Params = {
  id: string,
}

const CardPage = () => {

  const topicId  = parseInt(useParams<Params>().id);

  const [questions, setQuestions] = useState<TopicQuestion[]>([]);

  const [reveal, setReveal] = useState(false);

  const [index, setIndex] = useState(0);

  useEffect( () => {
    getListOfQuestions();
  }, [questions]);


  const getListOfQuestions = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      getQuestions(topicId)
      .then((res) => {
        setQuestions(res);
        resolve();
      }).catch((err) => {
        console.error(err);
        reject(err);
      });
    })
  }

  console.log(questions)

  const fetchQuestion = () => {
    if(questions && index > questions.length - 2) {
      getListOfQuestions().then(() => {
        setIndex(0)
        setReveal(false)
      });
    } else {
      setIndex(index + 1)
        setReveal(false)
    }
  };

  const topicProps = {
    currentQuestion: questions[index],
    reveal,
    setReveal
  }

  return (
    <div className="card-page">
      {
        topicProps.currentQuestion ? <div>
        <TopicQuestionComponent {...topicProps}></TopicQuestionComponent>
      </div> : 
      <div>
        Loading....
      </div>
      }
      
      <div className='footer'>
        <Button 
        onClick={fetchQuestion}
        > Previous </Button>        
        <Button 
        onClick={fetchQuestion}
        > Next </Button>        
      </div>
    </div>
  );
};

export default CardPage;
