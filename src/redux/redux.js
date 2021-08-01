import { QUESTIONS } from "./reducers/constants";
import store from "./store";

export const updateQuestions = (questions) => {
  store.dispatch({
    type: QUESTIONS,
    payload: questions,
  });
};
