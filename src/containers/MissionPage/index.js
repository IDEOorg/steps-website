import React from 'react';
import './index.less';
import config from '../../data/config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import ContactForm from '../ContactForm';

const MissionPage = () => {
  const missionpage = config.missionpage;
  return (
    <div className="mission_page">
      <div className="header_section mission_section">
        <Header showGuideButton />
        <div className="header_subsection">
          <div className="header_subsection_wrapper mission_subsection_wrapper">
            <p className="mission_tagline">{missionpage.contact.tagline}</p>
            <h2 className="mission_statement">{missionpage.contact.statement}</h2>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="about_section">
        <div className="about_subsection">
          <h2 className="about_title">{missionpage.about.title}</h2>
          <h2 className="about_description">{missionpage.about.description}</h2>
          <div className="about_button_section">
            <Button styling="primary_button">
              <p>{missionpage.about.button.name}</p>
            </Button>
          </div>
        </div>
      </div>
      <div className="partners_section">
      </div>
      <Footer />
    </div>
  );
};

export default MissionPage;

MissionPage.displayName = 'MissionPage';
