import React from "react";
import { useSelector } from "react-redux";
import { HeaderContainer, Title } from "../CommonComponents";
import Question from "./Question";

// eslint-disable-next-line
export default () => {
  const questions = useSelector(({ questions }) => questions);

  let total = questions.length;
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    // eslint-disable-next-line
    if (questions[i].response == questions[i].correctAns) {
      score++;
    }
  }

  return (
    <>
      <HeaderContainer>
        <Title>Result</Title>
        <p>{`${score} / ${total}`}</p>
      </HeaderContainer>
      {questions.map((question, index) => (
        <Question key={`rq_${index}`} question={question} />
      ))}
    </>
  );
};
