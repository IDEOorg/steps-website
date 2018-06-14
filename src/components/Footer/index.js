import React from 'react';
import './index.less';

const logo = require('../../assets/ideoorg-logo.svg');

const Footer = () => {
  return (
    <div>
      <div className="about_ideo_section">
        <div className="about_ideo_logo_box">
          <p className="about_ideo_logo_text">A PROJECT BY</p>
          <a href="http://www.ideo.org">
            <img className="about_ideo_logo" src={logo} alt="Logo" />
          </a>
        </div>
      </div>
      <div className="lp-footer-section">
        <div className="lp-footer-copyright">
          <p>© 2017 IDEO.org</p>
        </div>
        <div className="lp-footer-info">
          <a href="https://www.ideo.org/privacy-policy">Privacy Policy</a>
          <a href="https://steps.ideo.org/#/terms">Terms of Use</a>
          <a href="http://steps.ideo.org/#/mission">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

Footer.displayName = 'Footer';
