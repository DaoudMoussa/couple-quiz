import {useContext} from 'react'
import TestContext from '../../store/test-context'

const Correction = () => {
    const testCtx = useContext(TestContext)

    const listContent = testCtx.questions.map(question => {

        return (<li >
            <h2>Question n {question.id + 1}</h2>
            <p className='question-text'>
                {question.question}
            </p>
            <p className="right-answer">
                right answer: {question.id !== 4 ? question.answers[question.rightAnswerId].answer : 'Tutte'}
            </p>
            <p>
                given answer: {question.answers[testCtx.givenAnswers[question.id]].answer}
            </p>
        </li>)
    })
    return (
        <ul className="correction-container">
            {listContent}
        </ul>
    )
}

export default Correction
