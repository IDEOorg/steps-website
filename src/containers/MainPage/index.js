import React from 'react';
import classNames from 'classnames';
import './index.less';
import config from '../../data/config';
import ContactForm from '../ContactForm';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import VideoBackground from '../../components/VideoBackground';

const MainPage = (props) => {
  const mainpage = config.mainpage;
  const carouselSlidesDesktop = mainpage.features.carousel.desktop;
  const carouselSlidesMobile = mainpage.features.carousel.mobile;
  const benefitsSections = mainpage.benefits.benefitssections.map((section) => {
    const benefits = section.benefits.map((benefit) => {
      const imageUrl = require(`../../assets/benefits/${benefit.imageurl}`); // eslint-disable-line import/no-dynamic-require, global-require
      return (
        <div className="benefit" key={benefit.title}>
          <div className="benefit_icon_box">
            <img src={imageUrl} alt="Icon" />
          </div>
          <h2>{benefit.title}</h2>
          <p>{benefit.description}</p>
        </div>
      );
    });
    return (
      <div key={section.title} className={classNames(section.cssClass, "benefits_box")}>
        <h6 className="benefits_section_title">{section.title}</h6>
        <div className="benefits_list_section">
          {benefits}
        </div>
      </div>
    );
  });
  return (
    <div className="wrapper main_page">
      <div className="header_section main_section">
        <VideoBackground src={mainpage.header.video} poster={mainpage.header.videoposter} />
        <Header showGuideButton={false} path={props.route.path} />
        <div className="header_subsection">
          <div className="header_subsection_wrapper">
            <div className="header_title_section">
              <div className="header_title">
                <h1>{mainpage.header.title}</h1>
                <p>{mainpage.header.description}</p>
              </div>
            </div>
            <div className="button_section">
              <Button url={mainpage.header.button.url} styling="primary_button">
                <p>{mainpage.header.button.name}</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="features_section">
        <h2>{mainpage.features.title}</h2>
        <div className="features_carousel">
          <div className="carousel--desktop">
            <Carousel slides={carouselSlidesDesktop} />
          </div>
          <div className="carousel--mobile">
            <Carousel slides={carouselSlidesMobile} />
          </div>
        </div>
        <div className="features_pullquote">
          <p className="pullquote">{mainpage.features.pullquote}</p>
          <p className="author">{mainpage.features.pullquoteauthor}</p>
        </div>
      </div>
      <div className="benefits_section">
        {benefitsSections}
      </div>
      <div className="contact_section">
        <div className="contact_content_section">
          <h2>{mainpage.contact.title}</h2>
          <p>{mainpage.contact.description}</p>
        </div>
        <div className="main_contact_form">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;

MainPage.displayName = 'MainPage';
