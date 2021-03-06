import React, { Component } from 'react';
import './index.less';
import config from '../../data/config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InfoBox from '../../components/InfoBox';
import Button from '../../components/Button';
import VideoGallery from '../../components/VideoGallery';

const convergenceImg = config.howwework.convergencepage.imgurl;
const ideationImg = config.howwework.ideationpage.imgurl;

class HowWeWorkPage extends Component {
  constructor(props) {
    super(props);
    this.state = {showGallery: false};
  }

  render() {
    const howwework = config.howwework;
    const videoThumbs = howwework.videos.map((video) => {
      return (
        <div className="video_thumb" key={video.videoId}>
          <div className="iframe_container">
            <iframe
              src={`https://player.vimeo.com/video/${video.videoId}?title=0&byline=0&portrait=0`}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <p>{video.title}</p>
        </div>
      );
    });
    let videoGallery = null;
    if (this.state.showGallery) {
      videoGallery = (
        <VideoGallery
          videos={howwework.videos}
          onFinished={() => { this.setState({ showGallery: false }); }}
        />
      );
    }
    return (
      <div className="how_we_work_page">
        <div className="hww_header">
          <Header showGuideButton path={this.props.route.path} />
          <div className="hww_header_section">
            <h1 className="hww_title">{howwework.mainpage.title}</h1>
            <p className="hww_description">{howwework.mainpage.description}</p>
            <div className="intro_button_section">
              <div
                className="button primary_button"
                onClick={() => { this.setState({ showGallery: !this.state.showGallery }); }}
              >
                <p>{howwework.mainpage.button1.text}</p>
              </div>
            </div>
            <div className="intro_button_section">
              <Button url={howwework.mainpage.button2.url} styling={"primary_button green hww_button"} openSamePage>
                <p>{howwework.mainpage.button2.text}</p>
              </Button>
            </div>
          </div>
          {videoGallery}
          <div className="hww_video_thumbs_mobile">
            <div className="intro_button_section">
              <Button url={howwework.mainpage.button2.url} styling={"primary_button green hww_button"} openSamePage>
                <p>{howwework.mainpage.button2.text}</p>
              </Button>
            </div>
            {videoThumbs}
          </div>
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
        <div className="hww_adoption hww_default">
          <div className="hww_default_section">
            <h1>{howwework.adoptionpage.title}</h1>
            <p>{howwework.adoptionpage.description}</p>
            <div className="hww_button_section">
              <Button url={howwework.adoptionpage.button.url} styling={"primary_button green hww_button"} openSamePage>
                <p>{howwework.adoptionpage.button.text}</p>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

// <div className="hww_prototype hww_default">
//   <div className="hww_default_section">
//     <h1>{howwework.prototypepage.title}</h1>
//     <p>{howwework.prototypepage.description}</p>
//     <div className="hww_button_section">
// <Button
// url={howwework.prototypepage.button.url}
// styling={"primary_button blue hww_button"}
// openSamePage>
//         <p>{howwework.prototypepage.button.text}</p>
//       </Button>
//     </div>
//   </div>
// </div>

export default HowWeWorkPage;

HowWeWorkPage.displayName = 'HowWeWorkPage';
