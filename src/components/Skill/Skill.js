import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TagCloud from 'TagCloud';
import '../../styles/Skill/Skill.scss';

const skillGroups = [
  {
    category: 'Hard Skills',
    color: '#00ffff',
    items: [
      { label: 'Languages', skills: ['PHP (Advanced)', 'JavaScript (Advanced)', 'HTML5 / CSS3', 'TypeScript'] },
      { label: 'Frameworks & Libraries', skills: ['React.js / Next.js / React Native', 'Node.js / Express.js', 'Laravel', 'Bootstrap / Tailwind / MUI'] },
      { label: 'Databases', skills: ['MySQL', 'MongoDB'] },
      { label: 'Tools', skills: ['GIT / GitHub', 'REST API', 'WordPress', 'SASS / SCSS'] },
    ],
  },
  {
    category: 'Soft Skills',
    color: '#7c3aed',
    items: [
      { label: 'Interpersonal', skills: ['Teamwork', 'Communication', 'Leadership', 'Adaptability'] },
      { label: 'Professional', skills: ['Time Management', 'Critical Thinking', 'Problem Solving', 'Attention to Detail'] },
    ],
  },
  {
    category: 'Languages Spoken',
    color: '#10b981',
    items: [
      { label: 'Fluency', skills: ['English (Fluent)', 'Urdu / Hindi (Fluent)', 'Arabic (Basic)'] },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Skill = () => {
  useEffect(() => {
    const texts = [
      'HTML5','CSS3','SASS','JavaScript','React.js','React Native',
      'Next.js','Bootstrap','Tailwind','MUI','Node.js','Express.js',
      'MongoDB','MySQL','WordPress','Laravel','PHP','jQuery','ES6',
      'GIT','REST API','TypeScript',
    ];

    const getRadius = () => {
      const w = window.innerWidth;
      if (w <= 380) return 155;
      if (w <= 480) return 175;
      if (w <= 768) return 210;
      if (w <= 1024) return 230;
      return 260;
    };

    const initCloud = () => {
      const tagEl = document.querySelector('.tagcloud');
      if (tagEl) tagEl.innerHTML = '';
      TagCloud('.tagcloud', texts, {
        radius: getRadius(),
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true,
      });
    };

    initCloud();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initCloud, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
      const tagEl = document.querySelector('.tagcloud');
      if (tagEl) tagEl.innerHTML = '';
    };
  }, []);

  return (
    <div className="skill">
      <div className="skill__main-container">
        {/* Header */}
        <div className="skill__header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technical Expertise
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {['S','K','I','L','L'].map((l, i) => <span key={i}>{l}</span>)}
            <span style={{ background: 'none', WebkitTextFillColor: '#ffffff' }}>.</span>
          </motion.h1>
        </div>

        <div className="skill__inner-container">
          {/* Skill cards */}
          <div className="skill__info">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                className="skill__group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: gi * 0.15 }}
              >
                <div className="skill__group-title" style={{ '--group-color': group.color }}>
                  <span className="skill__group-dot" style={{ background: group.color }} />
                  {group.category}
                </div>
                <motion.div
                  className="skill__group-grid"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {group.items.map((item) => (
                    <motion.div
                      key={item.label}
                      className="skill__details"
                      variants={itemVariants}
                    >
                      <h4>{item.label}</h4>
                      <ul>
                        {item.skills.map((s) => (
                          <li key={s}><span>{s}</span></li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* 3D Tag Cloud */}
          <motion.div
            className="skill__cloud"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="tagcloud" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
