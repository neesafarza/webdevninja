import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopicQuestionComponent from "./TopicQuestionComponent";

type Params = {
  id: string | undefined,
}

const CardPage = () => {

  const topicId  = useParams<Params>().id;

  const questions = [
    {
      question: "hello",
      answer: "world",
    },
    {
      question: "hello1",
      answer: "world1",
    },
    {
      question: "hello2",
      answer: "world2",
    },
    {
      question: "hello3",
      answer: "world3",
    },
    {
      question: "hello4",
      answer: "world4",
    },
    {
      question: "hello5",
      answer: "world5",
    },
    {
      question: "hello6",
      answer: "world6",
    },
    {
      question: "hello7",
      answer: "world7",
    },
  ];

  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    // put your backend call for questions here
  }, []);


  const [index, setIndex] = useState(0);

  const fetchQuestion = () => {
    setCurrentQustion(questions[index]);
    setIndex(index + 1)
    setReveal(false)
  };

  const [currentQuestion, setCurrentQustion] = useState({
    question: "hello",
    answer: "world",
  });
  const topicProps = {
    currentQuestion,
    reveal,
    setReveal
  }

  return (
    <div className="card-page">
      <div>
        <TopicQuestionComponent {...topicProps}></TopicQuestionComponent>
      </div>
      <button onClick={fetchQuestion}> Next </button>
    </div>
  );
};

export default CardPage;
