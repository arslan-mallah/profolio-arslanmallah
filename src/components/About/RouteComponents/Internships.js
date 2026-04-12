import React from 'react'


import '../../../styles/About/Route/Internships.scss'

import Internship from '../../Internship';

import data from '../../../data'
import BackButton from './BackButton'

const Internships = () => {
    return (
        <>
            <div className="internships">
                <div className="internships__container">
                    <div className="internships__header">
                        <span className="route-label">Work History</span>
                        <h2 className="internships__number">0<span>3</span></h2>
                        <h1 data-aos='fade-up' data-aos-offset="0">I<span>nternships</span>.</h1>
                    </div>
                    <div className="internships__description">
                        <div className="internships__main-box">
                            {data.portfolio.internships.internship.map((content) => (
                                <Internship key={content.companyName} details={content} />
                            ))}
                        </div>
                    </div>
                    <BackButton />
                </div>
            </div>
        </>
    )
}

export default Internships