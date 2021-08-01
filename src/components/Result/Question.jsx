import React from "react";
import styled from "styled-components";

const QuestionContainer = styled.div`
  margin: 10px;
  padding: 10px;
  border: solid gray 1px;
  border-radius: 5px;
`;

const QuestionP = styled.p`
  color: gray;
`;

const SelectedAns = styled.p`
  color: red;
`;

const CorrectAns = styled.p`
  color: green;
`;

// eslint-disable-next-line
export default ({ question }) => {
  return (
    <QuestionContainer>
      <QuestionP>Q. {question.question}</QuestionP>
      <SelectedAns>Selected Answer: {question.response}</SelectedAns>
      <CorrectAns>Correct Answer: {question.correctAns}</CorrectAns>
    </QuestionContainer>
  );
};
