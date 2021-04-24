import {useState, useContext} from 'react'
import testContext from './test-context'
import MainPageContext from './main-page-context'
const CRISTINA_QUESTIONS = [
    {
        id: 0,
        question: "What's Cristina's favorite color?",
        answers: [
            {
                id: 0,
                answer: 'Yellow'
            },
            {
                id: 1,
                answer: 'Turquoise'
            },
            {
                id: 2,
                answer: 'Magenta'
            },
            {
                id: 3,
                answer: 'Blue'
            },
        ],
        rightAnswerId: 1
    },
    {
        id: 1,
        question: "What would Cristina sing at Karaoke night?",
        answers: [
            {
                id: 0,
                answer: 'Comunque andare'
            },
            {
                id: 1,
                answer: 'Mas de la una'
            },
            {
                id: 2,
                answer: 'Venezia'
            },
            {
                id: 3,
                answer: 'Cumbia chonera'
            },
        ],
        rightAnswerId: 2
    },
    {
        id: 2,
        question: "If Cristina could hire a personal worker what it would do?",
        answers: [
            {
                id: 0,
                answer: 'Chef'
            },
            {
                id: 1,
                answer: 'Driver'
            },
            {
                id: 2,
                answer: 'Student'
            },
            {
                id: 3,
                answer: 'Cleaner'
            },
        ],
        rightAnswerId: 0
    },
    {
        id: 3,
        question: "Have Cristina ever had a nickname? What is it?",
        answers: [
            {
                id: 0,
                answer: 'No'
            },
            {
                id: 1,
                answer: 'Crip'
            },
            {
                id: 2,
                answer: 'More than 1'
            },
            {
                id: 3,
                answer: 'Lorda'
            },
        ],
        rightAnswerId: 0
    },
    {
        id: 4,
        question: "If Cris Could go in a abandoned island for a week with who would she go?",
        answers: [
            {
                id: 0,
                answer: 'Davide'
            },
            {
                id: 1,
                answer: 'Daoud'
            },
            {
                id: 2,
                answer: 'Daoud Moussa'
            },
            {
                id: 3,
                answer: 'Su novío'
            },
        ],
        rightAnswerId: [0,1,2,3]
    },
];

const DAVIDE_QUESTIONS = [
    {
        id: 0,
        question: "What's Davide's favorite color?",
        answers: [
            {
                id: 0,
                answer: 'Yellow'
            },
            {
                id: 1,
                answer: 'Green'
            },
            {
                id: 2,
                answer: 'Ciano'
            },
            {
                id: 3,
                answer: 'Blue'
            },
        ],
        rightAnswerId: 3
    },
    {
        id: 1,
        question: "What would Davide sing at Karaoke night?",
        answers: [
            {
                id: 0,
                answer: 'Comunque andare'
            },
            {
                id: 1,
                answer: 'Mas de la una'
            },
            {
                id: 2,
                answer: 'Whatever song you would put'
            },
            {
                id: 3,
                answer: "O' latitant"
            },
        ],
        rightAnswerId: 3
    },
    {
        id: 2,
        question: "If Davide could hire a personal worker what would it do?",
        answers: [
            {
                id: 0,
                answer: 'Chef'
            },
            {
                id: 1,
                answer: 'Driver'
            },
            {
                id: 2,
                answer: 'Barber'
            },
            {
                id: 3,
                answer: 'Cleaner'
            },
        ],
        rightAnswerId: 1
    },
    {
        id: 3,
        question: "If Davide would win 1 Milion dollar to the lottary. what would he do first?",
        answers: [
            {
                id: 0,
                answer: 'Save them'
            },
            {
                id: 1,
                answer: 'Have an earth attack'
            },
            {
                id: 2,
                answer: 'Help the family'
            },
            {
                id: 3,
                answer: 'Go seeing Cris'
            },
        ],
        rightAnswerId: 1
    },
    {
        id: 4,
        question: "If Davide Could go in a abandoned island for a week with who would she go?",
        answers: [
            {
                id: 0,
                answer: 'Cristina'
            },
            {
                id: 1,
                answer: 'Crstina Barreiro'
            },
            {
                id: 2,
                answer: 'Cristina Guillen'
            },
            {
                id: 3,
                answer: 'Su novía'
            },
        ],
        rightAnswerId: [0,1,2,3]
    },
];

const TestContextProvider = (props) => {
    const [questions, setQuestions] = useState([])
    const [subject, setSubject] = useState('')
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [givenAnswers, setGivenAnswers] = useState([])

    const mainPageCtx = useContext(MainPageContext)

    const selectSubjectHandler = id => {
        if(id === 'Davide') {
            setSubject(id);
            setQuestions(DAVIDE_QUESTIONS)
        }
        if(id === 'Cris') {
            setSubject(id);
            setQuestions(CRISTINA_QUESTIONS)
        }
    }

    const nextQuestionHandler = (givenAnswer) => {
        console.log(givenAnswer)
        setGivenAnswers(prevGivenAnswers => prevGivenAnswers.concat(givenAnswer))
        if(activeQuestion !== 4) {
            setActiveQuestion(prevActiveQuestion => prevActiveQuestion + 1);
            return;
        }
        mainPageCtx.onChangeState('correction')
    }

    return (
        <testContext.Provider value={{
            subjectId: subject,
            activeQuestionId: activeQuestion,
            questions: questions,
            givenAnswers: givenAnswers,
            onNextQuestion: nextQuestionHandler,
            onSelectSubject: selectSubjectHandler,
        }}>
            {props.children}
        </testContext.Provider>
    )
}

export default TestContextProvider
