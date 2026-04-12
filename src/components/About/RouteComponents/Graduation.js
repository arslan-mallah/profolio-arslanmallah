import React from 'react'

import '../../../styles/About/Route/Graduation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import BackButton from './BackButton'

const Graduation = () => {
    const subjects = [
        'Web Engineering', 'OOP', 'DBMS', 'Data Structures',
        'Algorithms', 'Artificial Intelligence', 'Software Engineering',
        'Computer Networks', 'Operating Systems',
    ];

    return (
        <>
            <div className="graduation">
                <div className="graduation__container">
                    <div className="graduation__header">
                        <span className="route-label">Education</span>
                        <h2 className="graduation__number">0<span>4</span></h2>
                        <h1 data-aos='fade-up' data-aos-offset="0">E<span>ngineering</span>.</h1>
                    </div>

                    <div className="graduation__description">
                        <h1 data-aos="fade-up">University of Okara</h1>
                        <h2 data-aos="fade-up" data-aos-delay="100">
                            <FontAwesomeIcon icon={faCalendarDays} />
                            &nbsp; Bachelor of Computer Science &nbsp;|&nbsp; 2020 – 2024
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="200">
                            I pursued a Bachelor of Computer Science from 2020 to 2024, gaining
                            comprehensive knowledge across key areas of software development and
                            computer science. This degree built a strong foundation in both
                            theoretical concepts and practical applications, preparing me to excel
                            as a full-stack developer.
                        </p>
                    </div>

                    <div className="graduation__subjects" data-aos="fade-up" data-aos-delay="300">
                        {subjects.map((subject) => (
                            <span key={subject}>{subject}</span>
                        ))}
                    </div>
                    <BackButton />
                </div>
            </div>
        </>
    )
}

export default Graduation