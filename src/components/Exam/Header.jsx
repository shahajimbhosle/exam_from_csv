import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LinearProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { HeaderContainer, Title } from "../CommonComponents";

const ProgressContainer = styled.div`
  width: 80%;
  margin: 10px 0;
`;

const TimerContainer = styled.div`
  margin: 20px 0 0 0;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TimeSpan = styled.span`
  font-size: 26px;
  color: #e91e63;
`;

const SubTitle = styled.span`
  font-size: 12px;
  color: #9e9e9e;
`;

const secondsToTime = (secs) => {
  let hours = Math.floor(secs / (60 * 60));

  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
    h: ("0" + hours).slice(-2),
    m: ("0" + minutes).slice(-2),
    s: ("0" + seconds).slice(-2),
  };
  return obj;
};

// eslint-disable-next-line
export default () => {
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const totalSeconds = useSelector(
    ({ questions }) => parseInt(questions.length) * 60
  );
  const history = useHistory();

  useEffect(() => {
    if (totalSeconds) {
      setRemainingSeconds(totalSeconds);
      setTimeout(() => {
        history.replace("/result");
      }, totalSeconds * 1000);
    }
    // eslint-disable-next-line
  }, [totalSeconds]);

  useEffect(() => {
    if (remainingSeconds) {
      setTimeout(() => {
        setRemainingSeconds(remainingSeconds - 1);
      }, 1000);
    }
  }, [remainingSeconds]);

  let remainingTime = secondsToTime(remainingSeconds);

  let percentRemaining =
    0 >= totalSeconds ? 0 : (remainingSeconds / totalSeconds) * 100;

  return (
    <HeaderContainer>
      <Title>Vivek Computers</Title>
      <SubTitle>Online Exam</SubTitle>
      <TimerContainer>
        <span>Time Remaining: </span>
        <TimeSpan>{`${remainingTime.h}:${remainingTime.m}:${remainingTime.s}`}</TimeSpan>
      </TimerContainer>
      <ProgressContainer>
        <LinearProgress
          variant="determinate"
          value={percentRemaining}
          color="secondary"
        />
      </ProgressContainer>
    </HeaderContainer>
  );
};
