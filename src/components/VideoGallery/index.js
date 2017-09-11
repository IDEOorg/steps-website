import React, { Component } from 'react';
import './index.less';

class VideoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeVideo: props.videos[0]
    };
  }

  render() {
    const vimeoUrl = (url) => {
      return `https://player.vimeo.com/video/${url}?title=0&byline=0&portrait=0&autoplay=1`;
    };

    const videoThumbs = this.props.videos.map((video) => {
      return (
        <div
          className={`video_thumb ${this.state.activeVideo === video ? 'active' : ''}`}
          onClick={() => { this.setState({ activeVideo: video }); }}
        >
          <img src={video.thumbnail} alt={video.title} />
          <p>{video.title}</p>
        </div>
      );
    });

    return (
      <div className="video_gallery">
        <div className="video_thumbs">
          {videoThumbs}
        </div>
        <iframe title="active_video" src={vimeoUrl(this.state.activeVideo.videoId)} frameBorder="0" allowFullScreen />
      </div>
    );
  }
}

export default VideoGallery;

VideoGallery.displayName = 'VideoGallery';
