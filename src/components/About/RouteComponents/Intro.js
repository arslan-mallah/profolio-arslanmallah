import React from 'react'

import '../../../styles/About/Route/Intro.scss'
const Intro = () => {
    return (
        <>
            <div className="about-intro">
                <div className="about-intro__container">
                    <div className="about-intro__header">
                        <h2 className="about-intro__number">0<span>1</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">H<span>ello</span>.</h1>
                    </div>
                    <div className="about-intro__description">
                        <p data-aos="fade-right">
                            I am <span>MUHAMMAD ARSLAN</span>, a passionate web developer with a keen interest in creating innovative and dynamic web solutions.
                        </p>
                        <p data-aos="fade-right" data-aos-delay="200">
                            I specialize in building responsive and adaptive websites with more than 2 years of experience working with modern front-end technologies like React and Next.
                        </p>
                        <p data-aos="fade-right" data-aos-delay="400">
                            I am enthusiastic about developing user-friendly front-end features and bringing designs to life with clean, efficient code.
                        </p>
                        <p data-aos="fade-right" data-aos-delay="600">
                            Additionally, I have a foundational understanding of server-side development using Node.js, Express.js, and MongoDB, which allows me to create end-to-end web solutions.
                        </p>
                        <p data-aos="fade-right" data-aos-delay="800">
                            My goal is to continually learn and grow as a developer while delivering high-quality, scalable web applications.
                        </p>
                        <div className="about-intro__emoji">:&nbsp;)</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Intro