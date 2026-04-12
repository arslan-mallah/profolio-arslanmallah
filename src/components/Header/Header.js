import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import font awesome package 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import '../../styles/Header/Header.scss';

const FULL_NAME = 'ArslanMallah';
const TYPE_SPEED = 220;   // ms per letter — aur aahista
const PAUSE_AFTER = 20000; // 20 seconds pause then restart

const navLinks = [
  { label: 'About',   href: '#about',   sectionId: 'about'   },
  { label: 'Works',   href: '#work',    sectionId: 'work'    },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
];

const socialLinks = [
  { icon: faLinkedin, href: 'https://www.linkedin.com/in/arslan-mallah/', label: 'LinkedIn', className: 'header__linkedin' },
  { icon: faGithub,   href: 'https://github.com/arslan-mallah',           label: 'GitHub',   className: 'header__github'   },
  { icon: faInstagram,href: 'https://www.instagram.com/arslan__mallah/profilecard/?igsh=dGJpenlnenp2bnJs', label: 'Instagram', className: 'header__instagram' },
];

const Header = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [displayed, setDisplayed]   = useState('');
  const [activeLink, setActiveLink] = useState('');
  const timeoutRef = useRef(null);

  // ── Typewriter ─────────────────────────────────────────────────────────
  const startTyping = useCallback(() => {
    let i = 0;
    setDisplayed('');
    const type = () => {
      i++;
      setDisplayed(FULL_NAME.slice(0, i));
      if (i < FULL_NAME.length) {
        timeoutRef.current = setTimeout(type, TYPE_SPEED);
      } else {
        timeoutRef.current = setTimeout(startTyping, PAUSE_AFTER);
      }
    };
    timeoutRef.current = setTimeout(type, TYPE_SPEED);
  }, []);

  useEffect(() => {
    startTyping();
    return () => clearTimeout(timeoutRef.current);
  }, [startTyping]);

  // ── Scroll: header shrink + active section via IntersectionObserver ───
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Clear highlight when scrolled back to top (hero section)
      if (window.scrollY < 100) setActiveLink('');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Only highlight nav links after the user has scrolled away from hero
    // so that nothing is highlighted by default on page load
    const sectionIds = navLinks.map((l) => l.sectionId);
    const observers = [];
    let hasScrolled = false;

    const onFirstScroll = () => {
      hasScrolled = true;
      window.removeEventListener('scroll', onFirstScroll);
    };
    window.addEventListener('scroll', onFirstScroll, { passive: true });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          // Ignore the initial fire on page load — only react after user scrolls
          if (!hasScrolled) return;
          if (entry.isIntersecting) setActiveLink(`#${id}`);
        },
        { threshold: 0.3, rootMargin: '-70px 0px 0px 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', onFirstScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  // ── Mobile menu ────────────────────────────────────────────────────────
  const toggleMenu = () => setMenuOpen((v) => !v);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20, height: 0 },
    visible: { opacity: 1, y: 0, height: 'auto', transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { opacity: 0, y: -20, height: 0, transition: { duration: 0.25 } },
  };

  return (
    <motion.div
      className={`header${scrolled ? ' header--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="header__container">
        {/* Logo */}
        <motion.a
          className="header__logo"
          href="#hero"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          aria-label="Go to top"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="header__logo-text">{displayed}</span>
        </motion.a>

        {/* Desktop nav */}
        <div className="header__nav-links" id="header__nav-links">
          <ul>
            {navLinks.map((link, i) => {
              const isActive = activeLink === link.href;
              return (
                <motion.div
                  key={link.label}
                  className="header__nav-links-container"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                >
                  <li className="header__route">
                    <a
                      href={link.href}
                      className={isActive ? 'active' : ''}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveLink(link.href);
                        const el = document.getElementById(link.sectionId);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {link.label}
                    </a>
                    <motion.span
                      className="header__nav-underline"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.25 }}
                    />
                  </li>
                </motion.div>
              );
            })}

            {/* Social icons */}
            <motion.div
              className="header__social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map((s) => (
                <p key={s.label} className={s.className}>
                  <motion.a
                    href={s.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={s.label}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <FontAwesomeIcon icon={s.icon} size="lg" />
                  </motion.a>
                </p>
              ))}
            </motion.div>
          </ul>
        </div>

        {/* Hamburger */}
        <motion.div
          className={`header__hamburger-icon${menuOpen ? ' open' : ''}`}
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            id="header__hamburger-top-line"
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            id="header__hamburger-middle-line"
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            id="header__hamburger-bottom-line"
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="header__mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={`header__mobile-link${activeLink === link.href ? ' active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link.href);
                  setMenuOpen(false);
                  const el = document.getElementById(link.sectionId);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {link.label}
              </motion.a>
            ))}
            <div className="header__mobile-social">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} rel="noopener noreferrer" target="_blank" aria-label={s.label} className={s.className}>
                  <FontAwesomeIcon icon={s.icon} size="lg" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
