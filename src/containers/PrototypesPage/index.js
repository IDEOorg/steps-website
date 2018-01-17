import React from 'react';
import './index.less';
import config from '../../data/config';
import PrototypeSection from '../../components/PrototypeSection';
import Footer from '../../components/Footer';

const PrototypesPage = () => {
  const sections = config.prototypepage.sections.map((section) => {
    return (
      <PrototypeSection
        title={section.title}
        image={section.image}
        video={section.video}
        caption={section.caption}
        description={section.description}
        buttons={section.buttons}
      />
    );
  });
  return (
    <div className="prototypes_page">
      <div className="prototypes_intro">
        <div className="prototypes_intro_box">
          <h2>{config.prototypepage.intro.title}</h2>
          <p>{config.prototypepage.intro.description}</p>
        </div>
      </div>
      { sections }
      <Footer />
    </div>
  );
};

export default PrototypesPage;
