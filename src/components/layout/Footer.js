import React from 'react'
import classes from './Footer.module.css'


const Footer = () => {
    return (
        <footer className={classes.footer}>
            <p>
                Powered by
                <a className='rainbow animated' rel="noreferrer" href="https://www.linkedin.com/in/daoud-moussa/" target="_blank">
                    Davide
                </a>
            </p>
        </footer>
    )
}

export default Footer
