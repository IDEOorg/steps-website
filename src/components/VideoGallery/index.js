import React, { Component } from 'react';
import _ from 'lodash';
import Vimeo from '../Vimeo';
import './index.less';

class VideoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeVideo: props.videos[0]
    };

    this.vimeoPlayers = this.vimeoPlayers.bind(this);
    this.activeIndex = this.activeIndex.bind(this);
    this.playNext = this.playNext.bind(this);
  }

  vimeoPlayers() {
    return this.props.videos.map((video) => {
      return <Vimeo key={video.videoId} onEnded={this.playNext} vimeoId={video.videoId} />;
    });
  }

  activeIndex() {
    return this.props.videos.indexOf(this.state.activeVideo);
  }

  playNext() {
    const nextIndex = this.activeIndex() + 1;
    if (this.props.videos.length <= nextIndex) {
      if (_.isFunction(this.props.onFinished)) {
        this.props.onFinished();
      }
    } else {
      this.setState({ activeVideo: this.props.videos[nextIndex] });
    }
  }

  render() {
    const vimeos = this.vimeoPlayers();

    const videoThumbs = this.props.videos.map((video) => {
      return (
        <div
          key={video.videoId}
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
        {vimeos[this.activeIndex()]}
      </div>
    );
  }
}

export default VideoGallery;

VideoGallery.displayName = 'VideoGallery';
