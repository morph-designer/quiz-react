import React from "react";

import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = (props) => {
  return (
    <ul>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index + 1}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
          />
        );
      })}
    </ul>
  );
};

export default AnswerList;
