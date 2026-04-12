import React from 'react';
import { motion } from 'framer-motion';

import '../../styles/Works/Works.scss';

import data from '../../data';

// Importing child component
import ProjectCard from '../ProjectCard';

const Works = () => {
  return (
    <div className="works" id="work">
      <div className="works__container">
        <div className="works__header" id="works__heading">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {['W','O','R','K','S'].map((l, i) => <span key={i}>{l}</span>)}
            <span style={{ background: 'none', WebkitTextFillColor: '#ffffff' }}>.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A collection of projects I've built for clients and companies across different industries.
          </motion.p>
        </div>
        <div className="works__grid">
          <div className="works__grid-container">
            {data.portfolio.projectCard.cards.map((content, i) => (
              <ProjectCard key={content.heading} cardContent={content} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
