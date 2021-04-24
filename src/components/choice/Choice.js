import {useState, useContext} from 'react'
import classes from './Choice.module.css'
import Person from './Person'

import MainContext from '../../store/main-page-context'
import TestContext from '../../store/test-context'

const Choice = (props) => {
    const [davideChosenClass, setDavideChosenClass] = useState('')
    const [crisChosenClass, setCrisChosenClass] = useState('')

    const mainCtx = useContext(MainContext)
    const testCtx = useContext(TestContext)

    const chooseHandler = (id = '') => {
        changeChosenClassesHandler(id);
        setTimeout(() => {
            changeChosenClassesHandler();
            testCtx.onSelectSubject(id)
            mainCtx.onChangeState('test');
        }, 2000);
    }

    const changeChosenClassesHandler = (id='') => {
        if(id==='Davide') {
            setDavideChosenClass('chosen')
            setCrisChosenClass('not-chosen')
            return ;
        }
        if(id==='Cris') {
            setDavideChosenClass('not-chosen')
            setCrisChosenClass('chosen')
            return ;
        }

        setDavideChosenClass('')
        setCrisChosenClass('')
    }


    return (
        <div className={classes['choice-container']}>
            <p className={classes.choose}>Choose Your Subject!</p>
            <Person chosenClass={davideChosenClass} onChoose={chooseHandler} name="Davide" id="Davide"/>
            <Person chosenClass={crisChosenClass} onChoose={chooseHandler} name="Cris (Ximena)" id="Cris"/>
        </div>
    )
}

export default Choice
