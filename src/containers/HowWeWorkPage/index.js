import React from 'react';
import './index.less';
import config from '../../data/config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InfoBox from '../../components/InfoBox';
import Button from '../../components/Button';

const convergenceImg = config.howwework.convergencepage.imgurl;
const ideationImg = config.howwework.ideationpage.imgurl;

const HowWeWorkPage = () => {
  const howwework = config.howwework;
  return (
    <div className="how_we_work_page">
      <Header showGuideButton />
      <div className="hww_header_section">
        <h1 className="hww_title">{howwework.mainpage.title}</h1>
        <p className="hww_description">{howwework.mainpage.description}</p>
      </div>
      <div className="hww_ideation">
        <div className="hww_content">
          <h2>{howwework.ideationpage.title}</h2>
          <p className="description">{howwework.ideationpage.description}</p>
          <InfoBox styling={"hww_infobox"}>
            <h6 className="hww_infobox_title">{howwework.ideationpage.infobox.title}</h6>
            <p className="hww_infobox_description">{howwework.ideationpage.infobox.description}</p>
          </InfoBox>
        </div>
        <div className="hww_visual">
          <img className="hww_visual_img" src={ideationImg} alt={ideationImg} />
        </div>
      </div>
      <div className="hww_convergence">
        <div className="hww_content">
          <h2>{howwework.convergencepage.title}</h2>
          <p className="description">{howwework.convergencepage.description}</p>
          <InfoBox styling={"hww_infobox"}>
            <h6 className="hww_infobox_title">{howwework.convergencepage.infobox.title}</h6>
            <p className="hww_infobox_description">{howwework.convergencepage.infobox.description}</p>
          </InfoBox>
        </div>
        <div className="hww_visual">
          <img className="hww_visual_img" src={convergenceImg} alt={convergenceImg} />
        </div>
      </div>
      <div className="hww_adoption">
        <div className="hww_adoption_section">
          <h1>{howwework.adoptionpage.title}</h1>
          <p>{howwework.adoptionpage.description}</p>
          <div className="hww_button_section">
            <Button url={howwework.adoptionpage.button.url} styling={"primary_button blue hww_button"}>
              <p>{howwework.adoptionpage.button.text}</p>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowWeWorkPage;

HowWeWorkPage.displayName = 'HowWeWorkPage';
