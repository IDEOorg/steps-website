import React from 'react';
import './index.less';
import config from '../../data/config';
import Header from '../../components/Header';
import InfoBox from '../../components/InfoBox';

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
        <Header />
        <div className="gi_title_text">
          <h2>{gi.mainpage.title}</h2>
        </div>
        <div className="gi_anchors_section">
          <p className="gi_tagline">{gi.mainpage.stepstagline}</p>
          <div className="gi_anchor_links">
            {steps}
          </div>
        </div>
      </div>
      <div className="gi_try_them_page" id="try-them-out">
      </div>
      <div className="gi_collaborate_page" id="collaborate">
      </div>
    </div>
  );
};

export default GetInvolvedPage;

GetInvolvedPage.displayName = 'GetInvolvedPage';
