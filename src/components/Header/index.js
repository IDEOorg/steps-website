import React from 'react';
import './index.less';
import config from '../../data/config';

const Header = () => {
  const links = config.headerbar.map((content) => {
    return (
      <a href={content.url}>{content.name}</a>
    );
  });
  return (
    <div className="header">
      <div className="logo_section">
      </div>
      <div className="links_section">
        {links}
      </div>
    </div>
  );
};

export default Header;

Header.displayName = 'Header';
