import React from 'react';
import './index.less';
import config from '../../data/config';
import ContactForm from '../ContactForm';
import Header from '../../components/Header';

const MainPage = () => {
  return (
    <div className="main_page">
      <Header />
      <div className="header_section">
        <h1>{config.header.title}</h1>
        <p>{config.header.description}</p>
      </div>
      <div className="contact_section">
        <h2>{config.contact.title}</h2>
        <p>{config.contact.description}</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default MainPage;

MainPage.displayName = 'MainPage';
