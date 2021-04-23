import React from 'react'
import classes from './Choice.module.css'
import Person from './Person'

const Choice = (props) => {
    return (
        <div className={classes['choice-container']}>
            <p className={classes.choose}>Choose Your Subject!</p>
            <Person onChosen={props.onChosen} name="Davide" pictureName="Davide"/>
            <Person onChosen={props.onChosen} name="Cris (Ximena)" pictureName="Cris"/>
        </div>
    )
}

export default Choice
