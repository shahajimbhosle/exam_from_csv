import { QUESTIONS } from "./constants";

const questions = (state = [], { type, payload }) => {
  switch (type) {
    case QUESTIONS:
      return [...payload];
    default:
      return state;
  }
};

export default questions;
