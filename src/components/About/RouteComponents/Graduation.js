import React from 'react'


import '../../../styles/About/Route/Graduation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Graduation = () => {
    return (
        <>
            <div className="graduation">
                <div className="graduation__container">
                    <div className="graduation__header">
                        <h2 className="graduation__number">0<span>4</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>ngineering</span>.</h1>
                    </div>

                    <div className="graduation__description">
                        <h1>University of Okara..</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;01/03/2020 - 01/03/2024</h2>
                        <p>I pursued a Bachelor of Computer Science from 2020 to 2024, during which I gained comprehensive knowledge in key areas such as Web Engineering, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Data Structures & Algorithms, and Artificial Intelligence. These subjects provided me with a strong foundation in both theoretical concepts and practical applications, preparing me to excel in the field of computer science and software development.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graduation