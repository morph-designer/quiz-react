import React from "react";
import classes from "./ActiveQuiz.module.css";

import AnswerList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>{props.question}</strong>
        </span>
        <small>
          {props.questionNumber} из {props.quizLength}
        </small>
      </p>
      <AnswerList answers={props.answers} onAnswerClick={props.onAnswerClick} />
    </div>
  );
};

export default ActiveQuiz;
