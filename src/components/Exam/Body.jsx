import React, { useState } from "react";
import styled from "styled-components";
import Question from "./Question";
import QuestionNumbers from "./QuestionNumbers";

const Body = styled.div`
  padding: 10px;
  display: flex;
`;

// eslint-disable-next-line
export default () => {
  const [selectedQuestionId, setSelectedQuestionId] = useState(0);

  return (
    <Body>
      <Question
        selectedQuestionId={selectedQuestionId}
        setSelectedQuestionId={setSelectedQuestionId}
      />
      <QuestionNumbers
        selectedQuestionId={selectedQuestionId}
        setSelectedQuestionId={setSelectedQuestionId}
      />
    </Body>
  );
};
