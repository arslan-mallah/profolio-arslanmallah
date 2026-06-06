import React from 'react'

import '../../../styles/About/Route/Intro.scss'
import BackButton from './BackButton'

const Intro = () => {
    return (
        <>
            <div className="about-intro">
                <div className="about-intro__container">
                    <div className="about-intro__header">
                        <span className="route-label" style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '0.78em', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#00ffff', marginBottom: '0.6em' }}>About Me</span>
                        <h2 className="about-intro__number">0<span>1</span></h2>
                        <h1 data-aos='fade-up' data-aos-offset="0">H<span>ello</span>.</h1>
                    </div>
                    <div className="about-intro__description">
                        <p data-aos="fade-up">
                            <span>Muhammad Arslan</span>
                            I am a passionate web developer with a keen interest in creating innovative and dynamic web solutions.
                        </p>
                        <p data-aos="fade-up" data-aos-delay="100">
                            I specialize in building responsive and adaptive websites with more than 3 years of experience working with modern front-end technologies like React and Next.js.
                        </p>
                        <p data-aos="fade-up" data-aos-delay="200">
                            I am enthusiastic about developing user-friendly front-end features and bringing designs to life with clean, efficient code.
                        </p>
                        <p data-aos="fade-up" data-aos-delay="300">
                            Additionally, I have solid experience in server-side development using Node.js, Express.js, Laravel, and MongoDB — allowing me to create complete end-to-end web solutions.
                        </p>
                        <p data-aos="fade-up" data-aos-delay="400">
                            My goal is to continually learn and grow as a developer while delivering high-quality, scalable web applications that make an impact.
                        </p>
                    </div>
                    <BackButton />
                </div>
            </div>
        </>
    )
}

export default Intro