import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../../styles/About/About.scss";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const aboutCards = [
  {
    to: "/about/intro",
    number: "01",
    title: "Hello,",
    badge: "View Intro",
    content: (
      <p>
        <span>Muhammad Arslan</span>
        Highly passionate full-stack Developer with more than 3 years of
        experience building web & mobile applications.
      </p>
    ),
  },
  {
    to: "/about/experience",
    number: "02",
    title: "Experience",
    badge: "View Experience",
    content: (
      <p>
        <span>3+ years of experience</span>
        Developing full-stack applications using React.js, Laravel, Node.js,
        and ERP systems — delivering efficient and scalable web solutions.
      </p>
    ),
  },
  {
    to: "/about/internships",
    number: "03",
    title: "Internships",
    badge: "View Internships",
    content: (
      <ul>
        <li><span>eFAIDA Technologies</span><small>Front-end Developer</small></li>
        <li><span>KK Solutions</span><small>Junior Front-end Dev</small></li>
        <li><span>Tech Solutions Pro</span><small>Front-end Developer</small></li>
        <li><span>Samcotec</span><small>Full Stack Engineer</small></li>
      </ul>
    ),
  },
  {
    to: "/about/graduation",
    number: "04",
    title: "Engineering",
    badge: "View Education",
    content: (
      <p>
        <span>University of Okara</span>
        Bachelor of Computer Science (2020–2024). Focused on Web Engineering,
        OOP, DBMS, Data Structures & Algorithms, and Artificial Intelligence.
      </p>
    ),
  },
];

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__container">
        {/* Header */}
        <div className="about__header" id="about__heading">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Who I Am
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {["A","B","O","U","T"].map((l, i) => <span key={i}>{l}</span>)}
            <span style={{ background: "none", WebkitTextFillColor: "#ffffff" }}>.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Passionate full-stack developer crafting elegant, scalable digital experiences.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          className="about__details-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {aboutCards.map((card) => (
            <motion.div
              key={card.number}
              className="about__details"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
            >
              <Link to={card.to}>
                <span className="about__card-number">{card.number}</span>
                <h2>{card.title}</h2>
                {card.content}
                <span className="about__card-badge">{card.badge}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
