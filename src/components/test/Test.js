import { useContext, useState } from "react";

import Question from "./Question";

import TestContext from "../../store/test-context";
const Test = () => {
  const [prevClass, setPrevClass] = useState(null);
  const [activeClass, setActiveClass] = useState(false)
  const testCtx = useContext(TestContext);

  let questionObj1 = null;
  let questionObj2 = null;

  if(testCtx.activeQuestionId % 2) {
    questionObj1 = testCtx.questions[testCtx.activeQuestionId];

    if (testCtx.activeQuestionId !== 4) questionObj2 = testCtx.questions[testCtx.activeQuestionId + 1];
  } else {
    questionObj2 = testCtx.questions[testCtx.activeQuestionId];

    if (testCtx.activeQuestionId !== 4) questionObj1 = testCtx.questions[testCtx.activeQuestionId + 1];
  }

  
  const transitionHandler = () => {
      if(testCtx.activeQuestionId % 2) setPrevClass(1);
      else setPrevClass(2);

      setActiveClass(true);
        if(testCtx.activeQuestionId !== 4) {
            setTimeout(() => {
                setPrevClass(null);
                setActiveClass(false);
            }, 1000)
        }

  }
  return (
    <div className="test-container">
      {questionObj1 && (<Question
        onTransition={transitionHandler}
        active={(questionObj1.id === testCtx.activeQuestionId || activeClass) && "active"}
        prev={prevClass === 1 && "prev"}
        next={questionObj1.id > testCtx.activeQuestionId  && 'next'}
        questionObj={questionObj1}
      />)}
      
      {questionObj2 && (<Question
        onTransition={transitionHandler}
        active={(questionObj2.id === testCtx.activeQuestionId || activeClass) && "active"}
        prev={prevClass === 2 && "prev"}
        next={questionObj2.id > testCtx.activeQuestionId && 'next'}
        questionObj={questionObj2}/>)}
      
    </div>
  );
};

export default Test;
