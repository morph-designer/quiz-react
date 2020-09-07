import React, { Component } from "react";
import classes from "./Quiz.module.css";
import quiz from "../../arrayQuestion";

import ActiveQuiz from "../../component/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = { quiz, activeQuestion: 0 };

  onAnswerClickHandler = (answerID) => {
    const question = this.state.quiz[this.state.activeQuestion];
    // Если ответ правильный
    if (question.rightAnswerID === answerID) {
      const timeout = window.setTimeout(() => {
        // проверка, закончилось ли голосование

        // Если да
        if (this.isQuizFinished()) {
          console.log("finished");

          // Если нет
        } else {
          this.setState({ activeQuestion: this.state.activeQuestion + 1 });
        }

        window.clearTimeout(timeout);
      }, 1000);

      // Если ответ неправильный
    } else {
      console.log("неверно");
    }
  };

  isQuizFinished = () => {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  };
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            questionNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
