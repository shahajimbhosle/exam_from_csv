import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const QuestionNumberContainer = styled.div`
  flex: 1;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

const QuestionNumber = styled.span`
  width: 40px;
  min-width: 40px;
  height: 40px;
  border: solid purple 1px;
  border-radius: 15px;
  display: block;
  margin: 3px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  color: ${(props) => {
    switch (props.type) {
      case "not_answered":
      case "answered":
      case "not_answered_review":
      case "answered_review":
      case "dumped":
      case "current":
        return "white";
      case "not_visited":
        return "purple";

      default:
        return "purple";
    }
  }};
  background-color: ${(props) => {
    switch (props.type) {
      case "not_answered":
        return "red";

      case "answered":
        return "#28a745";

      case "not_answered_review":
        return "orange";

      case "answered_review":
        return "violet";

      case "dumped":
        return "gray";

      case "not_visited":
        return "white";

      case "current":
        return "#007bff";

      default:
        return "white";
    }
  }};
`;

// eslint-disable-next-line
export default ({ selectedQuestionId, setSelectedQuestionId }) => {
  const questions = useSelector(({ questions }) => questions);

  return (
    <QuestionNumberContainer>
      {questions.map((question, index) => (
        <QuestionNumber
          key={`qn_${index}`}
          type={
            selectedQuestionId === index
              ? "current"
              : question.response
              ? "answered"
              : ""
          }
          onClick={() => setSelectedQuestionId(index)}
        >
          {index + 1}
        </QuestionNumber>
      ))}
    </QuestionNumberContainer>
  );
};
