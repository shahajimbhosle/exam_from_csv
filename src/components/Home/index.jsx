import { Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { loadQuestions } from "../../db/questions";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// eslint-disable-next-line
export default () => {
  const history = useHistory();

  useEffect(() => {
    loadQuestions();
    // eslint-disable-next-line
  }, []);

  const gotoExam = () => {
    history.push("/exam");
  };

  return (
    <HomeContainer>
      <Button
        onClick={gotoExam}
        variant="contained"
        color="primary"
        endIcon={<Send />}
      >
        Start Exam
      </Button>
    </HomeContainer>
  );
};
