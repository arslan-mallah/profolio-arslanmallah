import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import '../../styles/Contact/Contact.scss';

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const infoItems = [
  { icon: faLocationDot, label: 'Location', value: 'Riyadh, Saudi Arabia' },
  { icon: faPhone,       label: 'Phone',    value: '(+966) 53 083 0447' },
  { icon: faEnvelope,    label: 'Email',    value: 'arslanmallah999@gmail.com' },
];

const socialLinks = [
  { icon: faLinkedin,  href: 'https://www.linkedin.com/in/arslan-mallah/',                                      className: 'contact__linkedin'  },
  { icon: faGithub,    href: 'https://github.com/arslan-mallah',                                                 className: 'contact__github'    },
  { icon: faInstagram, href: 'https://www.instagram.com/arslan__mallah/profilecard/?igsh=dGJpenlnenp2bnJs',     className: 'contact__instagram' },
];

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus]   = useState('');
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');
    emailjs
      .sendForm('service_6o4srbn', 'template_ais8y7q', formRef.current, 'VPC-Dijre1Ltay59L')
      .then(() => { setStatus('success'); setSending(false); formRef.current.reset(); })
      .catch(() => { setStatus('error'); setSending(false); });
  };

  return (
    <div className="contact" id="contact">
      {/* Header */}
      <div className="contact__header">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {['C','O','N','T','A','C','T'].map((l, i) => <span key={i}>{l}</span>)}
          <span style={{ background: 'none', WebkitTextFillColor: '#ffffff' }}>.</span>
        </motion.h1>
      </div>

      <div className="contact__container">
        {/* Form */}
        <motion.div
          className="contact__details"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="contact__form">
            <form ref={formRef} onSubmit={sendEmail}>
              {[
                { label: 'Name',    name: 'from_name',  type: 'text',  placeholder: 'Your full name' },
                { label: 'Email',   name: 'from_email', type: 'email', placeholder: 'your@email.com' },
              ].map((field, i) => (
                <motion.p
                  key={field.name}
                  className="contact__form-group"
                  custom={i}
                  variants={fieldVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label htmlFor={field.name}>{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    autoComplete="off"
                    placeholder={field.placeholder}
                    required
                  />
                </motion.p>
              ))}

              <motion.p
                className="contact__form-group"
                custom={2}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="contact__message"
                  rows="5"
                  placeholder="Tell me about your project..."
                />
              </motion.p>

              {status === 'success' && (
                <motion.p
                  className="contact__status contact__status--success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  ✅ Message sent successfully!
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  className="contact__status contact__status--error"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  ❌ Something went wrong. Please try again.
                </motion.p>
              )}

              <motion.button
                type="submit"
                className="contact__send-btn"
                disabled={sending}
                whileHover={!sending ? { scale: 1.02, y: -2 } : {}}
                whileTap={!sending ? { scale: 0.98 } : {}}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {sending ? (
                  <span className="contact__btn-spinner" />
                ) : null}
                {sending ? 'Sending...' : 'Send Message'}
                {!sending && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Info panel */}
        <motion.div
          className="contact__info"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
        >
          <span className="contact__info-title">Let's Connect</span>
          <div className="contact__info-details">
            <ul>
              {infoItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  whileHover={{ x: 4 }}
                >
                  <FontAwesomeIcon icon={item.icon} />
                  <p>
                    <span>{item.label}&nbsp;&nbsp;</span>
                    {item.value}
                  </p>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                whileHover={{ x: 4 }}
              >
                <FontAwesomeIcon icon={faSquareCheck} />
                <span>Available for Freelance</span>
              </motion.li>
            </ul>
          </div>

          <div className="contact__social">
            {socialLinks.map((s, i) => (
              <p key={i} className={s.className}>
                <motion.a
                  href={s.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <FontAwesomeIcon icon={s.icon} />
                </motion.a>
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
