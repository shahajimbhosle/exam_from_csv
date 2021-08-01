import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Button,
} from "@material-ui/core";
import { updateQuestions } from "../../redux/redux";
import { useHistory } from "react-router";

const QuestionContainer = styled.div`
  flex: 3;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  margin-right: 5px;
  position: relative;
  padding-bottom: 60px;
  height: 500px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

// eslint-disable-next-line
export default ({ selectedQuestionId, setSelectedQuestionId }) => {
  const questions = useSelector(({ questions }) => [...questions]);
  const history = useHistory();

  let question = false;

  if (questions && questions[selectedQuestionId]) {
    question = { ...questions[selectedQuestionId] };
  }

  if (!question) {
    return null;
  }

  const changeSelectedQuestionId = (numberOfSteps) => {
    setSelectedQuestionId(selectedQuestionId + numberOfSteps);
  };

  const updateResponse = (response) => {
    let tempQuestion = { ...question };
    tempQuestion.response = response;
    questions[selectedQuestionId] = tempQuestion;
    updateQuestions(questions);
  };

  const endExam = () => {
    history.replace("/result");
  };

  return (
    <QuestionContainer>
      <FormLabel component="legend">Q. {question.question}</FormLabel>
      <br />
      <hr />
      <br />
      <RadioGroup
        aria-label="quiz"
        name="quiz"
        value={question.response}
        onChange={(e) => updateResponse(e.target.value)}
      >
        {!!question.optA.length && (
          <FormControlLabel
            value={question.optA}
            control={<Radio />}
            label={question.optA}
            // eslint-disable-next-line
            checked={question.response == question.optA}
            key="optA"
          />
        )}
        {!!question.optB.length && (
          <FormControlLabel
            value={question.optB}
            control={<Radio />}
            label={question.optB}
            // eslint-disable-next-line
            checked={question.response == question.optB}
            key="optB"
          />
        )}
        {!!question.optC.length && (
          <FormControlLabel
            value={question.optC}
            control={<Radio />}
            label={question.optC}
            // eslint-disable-next-line
            checked={question.response == question.optC}
            key="optC"
          />
        )}
        {!!question.optD.length && (
          <FormControlLabel
            value={question.optD}
            control={<Radio />}
            label={question.optD}
            // eslint-disable-next-line
            checked={question.response == question.optD}
            key="optD"
          />
        )}
      </RadioGroup>
      <ButtonContainer>
        <Button
          variant="contained"
          size="small"
          color="primary"
          disabled={0 === selectedQuestionId}
          onClick={() => changeSelectedQuestionId(-1)}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          disabled={questions.length - 1 === selectedQuestionId}
          onClick={() => changeSelectedQuestionId(1)}
        >
          Next
        </Button>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={endExam}
        >
          End Exam
        </Button>
      </ButtonContainer>
    </QuestionContainer>
  );
};
