import React, { Component } from 'react';
import './index.less';
import config from '../../data/config';
import Footer from '../../components/Footer';
import VideoGallery from '../../components/VideoGallery';

class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {showGallery: false};
  }

  render() {
    const videoThumbs = config.howwework.videos.map((video) => {
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
    const videoGallery = (
      <VideoGallery
        videos={config.howwework.videos}
        onFinished={() => { this.setState({ showGallery: false }); }}
      />
    );
    return (
      <div className="gallery_page">
        <div className="gal_header">
          <div className="gal_video_desktop">
            {videoGallery}
          </div>
          <div className="gal_video_thumbs_mobile">
            {videoThumbs}
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

export default GalleryPage;

GalleryPage.displayName = 'GalleryPage';
