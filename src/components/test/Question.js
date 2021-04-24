
import classes from './Question.module.css'
import AnswerForm from './AnswerForm'

const Question = (props) => {
    let questionContainerClasses = [];
    if(props.active) questionContainerClasses += classes[props.active] + ' ';
    if(props.prev) questionContainerClasses += classes[props.prev]  + ' ';
    if(props.next) questionContainerClasses += classes[props.next]  + ' ';

    return (
        <div className={classes['question-container'] + " " + questionContainerClasses}>
            <aside>
                <p>{props.questionObj.question}</p>
            </aside>
            <section>
                <AnswerForm onTransition={props.onTransition} answers={props.questionObj.answers} id={props.questionObj.id}/>
            </section>
        </div>
    )
}

export default Question
