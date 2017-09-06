import React, { Component } from 'react';
import classNames from 'classnames';
import Button from '../Button';
import './index.less';
import config from '../../data/config';
import logo from '../../assets/steps-logo.svg';
import menuIcon from '../../assets/menu-icon.svg';
import exitIcon from '../../assets/menu-close.svg';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {isExpanded: false};
  }
  render() {
    const links = config.headerbar.map((content) => {
      return (
        <a className="header_link" href={`#${content.url}`} key={content.url}>{content.name}</a>
      );
    });
    let guideButton = null;
    if (this.props.showGuideButton) {
      guideButton = (
        <Button styling="header_button" url="https://steps.ideo.org/landing-page">
          <p>TRY A GUIDE</p>
        </Button>
      );
    }

    let iconShown = null;
    if (this.state.isExpanded) {
      iconShown = (
        <img src={exitIcon} alt="Exit Icon" />
      );
    } else {
      iconShown = (
        <img src={menuIcon} alt="Menu Icon" />
      );
    }

    return (
      <div className={classNames("header", this.props.styling, this.state.isExpanded ? "header_expanded" : null)}>
        <div className="logo_section">
          <a href="#/">
            <img src={logo} alt="Steps Logo" />
          </a>
        </div>
        <div className="links_section">
          <div
            className="menu_icon"
            onClick={() => { this.setState({ isExpanded: !this.state.isExpanded }); }}
          >
            {iconShown}
          </div>
          <div className={classNames("links_content", this.state.isExpanded ? "content_expanded" : null)}>
            {links}
            {guideButton}
          </div>
        </div>
      </div>
    );
  }
}

Header.displayName = 'Header';
