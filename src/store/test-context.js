import react from 'react'

const testContext = react.createContext({
    id: '',
    activeQuestion: null,
    questions: [
        {
            id: null,
            question: '',
            answers: [
                {
                    id: null,
                    question: ''
                }
            ],
            rightAnswer: null
        }
    ],
    status: false
})

export default testContext