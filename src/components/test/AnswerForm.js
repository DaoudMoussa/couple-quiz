import { useState, useContext } from "react";
import classes from "./AnswerForm.module.css";
import TestContext from "../../store/test-context";
const AnswerForm = (props) => {
  const [chosenAnswer, setChosenAnswer] = useState(null);

  const testCtx = useContext(TestContext);

  const changeSelectedAnswer = (event) => {
    const answerIdStr = event.target.id.split("-")[1];
    const answerId = parseInt(answerIdStr);

    setChosenAnswer(answerId);
  };

  const formOptions = props.answers.map((answer) => (
    <div key={answer.id} className={classes["form-control"]}>
      <input
        checked={chosenAnswer === answer.id && "checked"}
        onChange={changeSelectedAnswer}
        id={`${props.id}-${answer.id}`}
        type="radio"
        name="answer"
      />
      <label
        className={chosenAnswer === answer.id ? classes.selected : ''}
        htmlFor={`${props.id}-${answer.id}`}
      >
        {answer.answer}
      </label>
    </div>
  ));

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onTransition();
    
    setTimeout(() => {
        testCtx.onNextQuestion(chosenAnswer);
        setChosenAnswer(null);
    }, 1000)
    
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      {formOptions}
      <div className={classes["button-container"]}>
        <button className={chosenAnswer === null ? classes.disabled : ''} disabled={chosenAnswer === null && "disabled"} type="submit">Conferma</button>
      </div>
    </form>
  );
};

export default AnswerForm;
