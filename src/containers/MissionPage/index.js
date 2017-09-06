import React from 'react';
import './index.less';
import config from '../../data/config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import ContactForm from '../ContactForm';

const MissionPage = () => {
  const missionpage = config.missionpage;
  const acGrid = missionpage.partners.acmembers.map((member) => {
    // eslint-disable-next-line
    return (
      <div className="ac_image_box">
        <img className="mi_ac_member_image" src={require(`../../assets/aclogos/${member.imgurl}`)} alt={member.title} />
      </div>
    );
  });
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
        <div className="mi_subsection">
          <h2 className="about_title">{missionpage.about.title}</h2>
          <p className="about_description">{missionpage.about.description}</p>
          <div className="about_button_section">
            <Button styling="primary_button" url={missionpage.about.button.url}>
              <p>{missionpage.about.button.name}</p>
            </Button>
          </div>
        </div>
      </div>
      <div className="partners_section">
        <div className="mi_subsection">
          <h2 className="about_title">{missionpage.partners.headline}</h2>
          <p className="about_description">{missionpage.partners.description}</p>
        </div>
        <div className="mi_ac_members">
          <p className="mi_tagline">{missionpage.partners.tagline}</p>
          <div className="mi_ac_grid_wrapper">
            <div className="mi_ac_grid">
              {acGrid}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MissionPage;

MissionPage.displayName = 'MissionPage';
