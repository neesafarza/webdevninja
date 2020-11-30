import React from "react";
import { TopicQuestion } from "../interfaces/topics";
import "../styles/TopicQuestionComponent.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

type TopicQuestionProps = {
  currentQuestion: TopicQuestion;
  reveal: boolean;
  setReveal: any;
};

const TopicQuestionComponent = (props: TopicQuestionProps) => {
  return (
    <div className="divcontainer">
      <div className="topic">
        <Card bg="light" style={{ width: "18rem" }} text="dark">
          <Card.Header>Question</Card.Header>
          <Card.Body>
            <Card.Text>{props.currentQuestion.question}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      {props.reveal === false ? (
        <div className="topic">
          <Card 
          bg="dark"
          style={{ width: "18rem" }}
          className="text-center"
          >
            <Card.Body>
            <Button
              variant="dark"
              onClick={() => props.setReveal(true)}
            >
              Click to reveal
            </Button>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <div className="topic">
          <Card 
          bg="light"
          style={{ width: "18rem" }}
          className="text-center"
          >
            <Card.Body>
              <Card.Text>{props.currentQuestion.answer}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TopicQuestionComponent;
