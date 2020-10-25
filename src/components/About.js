import React from 'react'
import './About.css'
import girl from './girl.jpg'

function About() {
    return (
        <div id='about'>
            <div className='about'>
                <div className='about__data'>
                <h1>About</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='about__imgDiv'>
                    <img className='about__img' src={girl} alt=""/>
                </div>
            </div>
        </div>

    )
}

export default About
