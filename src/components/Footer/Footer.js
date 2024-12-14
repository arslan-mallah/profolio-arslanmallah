import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import '../../styles/Footer/Footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <p>
            I design and develop experiences that make people's lives <strong>Simple</strong> <FontAwesomeIcon icon={faHeart} size="lg" />
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
