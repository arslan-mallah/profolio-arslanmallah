import React from 'react'

import '../../../styles/About/Route/Experience.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import BackButton from './BackButton'

const Experience = () => {
    return (
        <>
            <div className="experience">
                <div className="experience__container">
                    <div className="experience__header">
                        <span className="route-label">My Journey</span>
                        <h2 className="experience__number">0<span>2</span></h2>
                        <h1 data-aos='fade-up' data-aos-offset="0">E<span>xperience</span>.</h1>
                    </div>
                    <div className="experience__description">
                        <div className="experience__main-box">
                            <div className="experience__box">
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;01/06/2022 - PRESENT</h3>
                                <ul>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Over 3 years of professional experience as a Full Stack Developer specializing in React.js, Laravel, Node.js, and ERP systems.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Currently working as an <b>Associate Software Engineer at Samcotec</b>, developing Saudi Arabia-based ERP solutions.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='600'>
                                        <span>Proficient in PHP (Laravel), React.js, Node.js, and Express.js for building robust full-stack applications.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='800'>
                                        <span>Skilled in REST API integration, MySQL, and MongoDB for scalable and efficient data management.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='1000'>
                                        <span>Experience with Bootstrap, Tailwind CSS, and MUI for building responsive, modern user interfaces.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='1200'>
                                        <span>Continuously learning and staying updated with the latest web technologies to deliver high-quality enterprise solutions.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <BackButton />
                </div>
            </div>
        </>
    )
}

export default Experience