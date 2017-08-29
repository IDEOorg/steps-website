import React from 'react';
import classNames from 'classnames';
import Button from '../Button';
import './index.less';
import config from '../../data/config';
import logo from '../../assets/steps-logo.svg';

const Header = (props) => {
  console.log(props);
  const links = config.headerbar.map((content) => {
    return (
      <a className="header_link" href={`#${content.url}`} key={content.url}>{content.name}</a>
    );
  });
  let guideButton = null;
  if (props.showGuideButton) {
    guideButton = (
      <Button styling="header_button">
        <p>TRY A GUIDE</p>
      </Button>
    );
  }

  return (
    <div className={classNames("header", props.styling)}>
      <div className="logo_section">
        <img src={logo} alt="Steps Logo" />
      </div>
      <div className="links_section">
        {links}
        {guideButton}
      </div>
    </div>
  );
};

export default Header;

Header.displayName = 'Header';
