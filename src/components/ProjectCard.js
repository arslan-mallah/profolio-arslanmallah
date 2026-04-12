import React from 'react';
import { motion } from 'framer-motion';

import '../styles/ProjectCard.scss';

const cardIcons = ['🌐', '🍰', '🚗', '🍽️', '🏔️', '👗', '⚙️'];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const ProjectCard = (props) => {
  const {
    heading,
    description,
    buttonLink,
    buttonText,
  } = props.cardContent;
  const index = props.index ?? 0;

  return (
    <motion.div
      className="project-card"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{
        y: -12,
        scale: 1.02,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      <div className="project-card__top">
        <motion.span
          className="project-card__icon"
          whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.4 }}
        >
          {cardIcons[index] || '🌐'}
        </motion.span>
        <span className="project-card__number">0{index + 1}</span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{heading}</h3>
        <p className="project-card__desc">{description}</p>
      </div>

      <div className="project-card__footer">
        <motion.a
          className="project-card__btn"
          href={buttonLink}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          {buttonText}
          <motion.span
            className="project-card__arrow"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >→</motion.span>
        </motion.a>
      </div>

      {/* Glow overlay on hover */}
      <div className="project-card__glow" />
    </motion.div>
  );
};

export default ProjectCard;
