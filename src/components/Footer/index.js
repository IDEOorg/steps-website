import React from 'react';
import './index.less';

const logo = require('../../assets/ideoorg-logo.svg');

const Footer = () => {
  return (
    <div className="about_ideo_section">
      <div className="about_ideo_logo_box">
        <p className="about_ideo_logo_text">A PROJECT BY</p>
        <a href="http://www.ideo.org">
          <img className="about_ideo_logo" src={logo} alt="Logo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;

Footer.displayName = 'Footer';
