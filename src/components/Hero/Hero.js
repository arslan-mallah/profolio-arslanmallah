import React, { useEffect } from 'react';

import '../../styles/Hero/Hero.scss';

import Myself from '../../assets/images/9be9ed22-311f-4cc1-8ad6-dcd1bebd1391.mp4';

const Hero = () => {
  useEffect(() => {
    const alphbets = document.getElementsByClassName('hero__alphabet');
    for (let i = 0; i <= alphbets.length; i++) {
      alphbets[i]?.addEventListener('animationend', function () {
        alphbets[i].classList.remove('alphabet-animated');
      });

      alphbets[i]?.addEventListener('mouseover', function () {
        alphbets[i].classList.add('alphabet-animated');
      });
    }
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__intro-box">
            <p className="hero__intro-title">
              <span className="hero__intro-line" data-aos="fade-down"></span>
              Hello, I am Muhammad Arslan
            </p>
            <p className="hero__animated-alphabet-box">
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                F
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                U
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                L
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                L
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                -
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                S
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                T
              </span>
              <span
                className="hero__alphabet hero__alphabet--last"
                data-aos="fade-up"
                data-aos-delay="1600"
              >
                A
              </span>
              <span
                className="hero__alphabet hero__alphabet--last"
                data-aos="fade-up"
                data-aos-delay="1600"
              >
                C
              </span>
              <span
                className="hero__alphabet hero__alphabet--last"
                data-aos="fade-up"
                data-aos-delay="1600"
              >
                K
              </span>
              <span
                className="hero__developer-text"
                data-aos="zoom-out-down"
                data-aos-delay="1800"
              >
                <span className="hero__dev-text">Developer</span>
              </span>
            </p>
            <div
              className="hero__description"
              data-aos="fade"
              data-aos-delay="1800"
            >
              <p>
                I'm a passionate and responsible{' '}
                <span>full-stack developer</span>, with more than 2 years of
                experience. Skilled in developing highly responsive websites and
                mobile apps with elegant and efficient code.
              </p>
            </div>

            <div className="hero__buttons">
              <a
                className="hero__know-btn"
                href="#about"
                data-aos="fade-up"
                data-aos-delay="1800"
              >
                Know more
              </a>
              <a
                className="hero__contact-btn"
                href="#contact"
                data-aos="fade-up"
                data-aos-delay="2000"
              >
                Contact me
              </a>
            </div>
          </div>
          <div className="hero__image" data-aos="zoom-in" data-aos-delay="200">
            {/* <img src={Myself} alt="me" /> */}
            <video width="500" height="425" autoPlay loop muted>
              <source src={Myself} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;