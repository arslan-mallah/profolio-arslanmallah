import React from 'react'

import '../../../styles/About/Route/Experience.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
    return (
        <>
            <div className="experience">
                <div className="experience__container">
                    <div className="experience__header">
                        <h2 className="experience__number">0<span>2</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>xperience</span>.</h1>
                    </div>
                    <div className="experience__description">
                        <div className="experience__main-box">
                            <div className="experience__box">
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;01/06/2022 - PRESENT</h3>
                                <ul>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Over 2 years of professional experience as a Web Developer specializing in the MERN stack.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Expertise in React.js for building dynamic, responsive, and user-friendly interfaces.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='600'>
                                        <span>Proficient in MongoDB, Express.js, and Node.js for creating robust and scalable backend systems.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='800'>
                                        <span>Skilled in integrating APIs and ensuring seamless communication between the frontend and backend.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='800'>
                                        <span>Strong understanding of modern web development practices, including component-based architecture and state management in React.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='800'>
                                        <span>Continuously learning and staying updated with the latest web technologies to deliver high-quality solutions.</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience