import { csv } from "d3";
import { updateQuestions } from "../redux/redux";
import questionsCsv from "./questions.csv";

export const loadQuestions = () => {
  csv(questionsCsv).then((questions) => {
    updateQuestions(questions);
  });
};
