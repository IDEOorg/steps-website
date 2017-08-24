import React from 'react';
import './index.less';
import config from '../../data/config';
import ContactForm from '../ContactForm';
import Button from '../../components/Button';
import Header from '../../components/Header';

const MainPage = () => {
  const benefitsSections = config.mainpage.benefits.benefitssections.map((section) => {
    const benefits = section.benefits.map((benefit) => {
      return (
        <div key={benefit.title}>
          <h2>{benefit.title}</h2>
          <p>{benefit.description}</p>
        </div>
      );
    });
    return (
      <div key={section.title}>
        <h6 className="benefits_section_title">{section.title}</h6>
        <div className="benefits_list_section">
          {benefits}
        </div>
      </div>
    );
  });
  const mainpage = config.mainpage;
  return (
    <div className="wrapper main_page">
      <div className="header_section">
        <Header />
        <h1>{mainpage.header.title}</h1>
        <p>{mainpage.header.description}</p>
        <div className="button_section">
          <Button
            text={mainpage.header.button.name}
            url={mainpage.header.button.url}
          />
        </div>
      </div>
      <div className="features_section">
        <h2>{mainpage.features.title}</h2>
        <p className="pullquote">{mainpage.features.pullquote}</p>
        <p className="author">{mainpage.features.pullquoteauthor}</p>
      </div>
      <div className="benefits_section">
        {benefitsSections}
      </div>
      <div className="contact_section">
        <h2>{mainpage.contact.title}</h2>
        <p>{mainpage.contact.description}</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default MainPage;

MainPage.displayName = 'MainPage';
