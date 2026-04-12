import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import '../../styles/Footer/Footer.scss';

const socialLinks = [
  { icon: faLinkedin,  href: 'https://www.linkedin.com/in/arslan-mallah/', label: 'LinkedIn'  },
  { icon: faGithub,    href: 'https://github.com/arslan-mallah',           label: 'GitHub'    },
  { icon: faInstagram, href: 'https://www.instagram.com/arslan__mallah/profilecard/?igsh=dGJpenlnenp2bnJs', label: 'Instagram' },
];

const Footer = () => {
  return (
    <motion.div
      className="footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="footer__container">
        {/* Brand */}
        <div className="footer__brand">
          <motion.span
            className="footer__logo"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          >
            ArslanMallah
          </motion.span>
          <p className="footer__tagline">Full-Stack Developer · Crafting Digital Experiences</p>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>
            Designed & built by <strong>Muhammad Arslan</strong> with{' '}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'inline-block' }}
            >
              <FontAwesomeIcon icon={faHeart} className="footer__heart" />
            </motion.span>
          </p>

          {/* Social */}
          <div className="footer__social">
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={s.label}
                className="footer__social-link"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FontAwesomeIcon icon={s.icon} />
              </motion.a>
            ))}
          </div>

          <span className="footer__copy">© {new Date().getFullYear()} — All rights reserved</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;

