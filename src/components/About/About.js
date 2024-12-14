import React from "react";
import { Link } from "react-router-dom";

import "../../styles/About/About.scss";

const About = () => {

  return (
    <>
      <div className="about" id="about">
        <div className="about__container">
          <div className="about__header" id="about__heading">
            <h1 data-aos="fade-down" data-aos-delay="0" data-aos-offset="20">
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                A
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                B
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                O
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                U
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                T
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
            <p></p>
          </div>

          <div className="about__details-container">
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-once="true"
            >
              <Link to="/about/intro">
                <h1>
                  0<span>1</span>
                </h1>
                <h2>
                  H<span>ello,</span>
                </h2>
                <p>
                  I am <span>Muhammad Arslan.</span> <br /> Highly passoinate
                  full-stack Developer with more than 2 years of experience.
                </p>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <Link to="/about/experience">
                <h1>
                  0<span>2</span>
                </h1>
                <h2>
                  E<span>xperience</span>
                </h2>
                <p>
                  <span>2 years of experience.</span>
                  <br />I have over 2 years of experience developing highly responsive websites using React.js and Node.js, delivering efficient and user-friendly web solutions.
                </p>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="50"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <Link to="/about/internships">
                <h1>
                  0<span>3</span>
                </h1>
                <h2>
                  I<span>nternships</span>
                </h2>
                <p>
                  <span>Interned at -</span> <br />
                </p>
                <ul>
                  <li>
                    <span>eFAIDA Technologies</span> - Internship Front-end Developer{" "}
                  </li>
                  <li>
                    <span>KK Solutions</span> - Junior Front-end Developer{" "}
                  </li>
                  <li>
                    <span>Tech Solutions Pro limited</span> - Front-end Developer{" "}
                  </li>
                </ul>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="700"
              data-aos-once="true"
            >
              <Link to="/about/graduation">
                <h1>
                  0<span>4</span>
                </h1>
                <h2>
                  E<span>ngineering</span>
                </h2>
                <p>
                  <span>University of Okara </span>
                  <br />
                  I completed my Bachelor of Computer Science (2020-2024), focusing on subjects like Web Engineering, OOP, DBMS, Data Structures & Algorithms, and Artificial Intelligence, building a strong foundation in computer science and software development.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
