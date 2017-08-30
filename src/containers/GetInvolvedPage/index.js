import React from 'react';
import './index.less';
import config from '../../data/config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../ContactForm';
import InfoBox from '../../components/InfoBox';
import Button from '../../components/Button';

const trythemImgUrl = require(`../../assets/${config.getinvolved.trythempage.infobox.imgurl}`); // eslint-disable-line import/no-dynamic-require
const collabImgUrl = require(`../../assets/${config.getinvolved.collabpage.infobox.imgurl}`); // eslint-disable-line import/no-dynamic-require
const codeImgUrl = require(`../../assets/${config.getinvolved.codepage.infobox.imgurl}`); // eslint-disable-line import/no-dynamic-require
const onAnchorClick = (anchor) => {
  document.getElementById(anchor).scrollIntoView();
};

const GetInvolvedPage = () => {
  const gi = config.getinvolved;
  const steps = gi.mainpage.steps.map((step, i) => {
    return (
      // eslint-disable-next-line jsx-a11y/interactive-supports-focus
      <div className="gi_anchor_link_box" role="button" onClick={() => { onAnchorClick(step.anchor); }}>
        <InfoBox styling="anchor_link_styling">
          <p>{i + 1}</p>
          <p>{step.title}</p>
        </InfoBox>
      </div>
    );
  });
  return (
    <div className="get_involved_page">
      <div className="gi_header_section">
        <Header showGuideButton />
        <div className="gi_title_text">
          <h1>{gi.mainpage.title}</h1>
        </div>
        <div className="gi_anchors_section">
          <p className="gi_tagline">{gi.mainpage.stepstagline}</p>
          <div className="gi_anchor_links">
            {steps}
          </div>
        </div>
      </div>
      <div className="gi_try_them_page" id="try-them-out">
        <div className="gi_try_content">
          <h2>{gi.trythempage.title}</h2>
          <p>{gi.trythempage.description}</p>
        </div>
        <div className="gi_visual_box">
          <img className="gi_visual" src={trythemImgUrl} alt={gi.trythempage.infobox.imgurl} />
          <div className="gi_info_section_wrapper">
            <div className="gi_info_section">
              <InfoBox styling="gi_infobox">
                <p className="gi_infobox_text">{gi.trythempage.infobox.text}</p>
                <Button styling="primary_button">
                  <p>{gi.trythempage.infobox.button.text}</p>
                </Button>
              </InfoBox>
            </div>
          </div>
        </div>
      </div>
      <div className="gi_collaborate_page" id="collaborate">
        <div className="gi_collab_form">
          <div className="gi_collab_form_content">
            <h2 className="gi_collab_title">{gi.collabpage.title}</h2>
            <p className="gi_collab_description">{gi.collabpage.description}</p>
          </div>
          <ContactForm />
        </div>
        <div className="gi_visual_box">
          <div className="gi_info_section_wrapper">
            <div className="gi_info_section left">
              <InfoBox styling="gi_infobox">
                <p className="gi_infobox_text">{gi.collabpage.infobox.text}</p>
                <Button styling="primary_button blue">
                  <p>{gi.collabpage.infobox.button.text}</p>
                </Button>
              </InfoBox>
            </div>
          </div>
          <img className="gi_visual" src={collabImgUrl} alt={gi.collabpage.infobox.imgurl} />
        </div>
      </div>
      <div className="gi_code_page" id="steal-our-code">
        <div className="gi_code_page_content">
          <h2 className="gi_code_title">{gi.codepage.title}</h2>
          <p className="gi_code_description">{gi.codepage.description}</p>
        </div>
        <div className="gi_visual_box">
          <div className="gi_info_section_wrapper">
            <div className="gi_info_section left">
              <InfoBox styling="gi_infobox">
                <p className="gi_infobox_text">{gi.codepage.infobox.text}</p>
                <Button styling="primary_button">
                  <p>{gi.codepage.infobox.button.text}</p>
                </Button>
              </InfoBox>
            </div>
          </div>
          <img className="gi_visual" src={codeImgUrl} alt={gi.codepage.infobox.imgurl} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetInvolvedPage;

GetInvolvedPage.displayName = 'GetInvolvedPage';
