import React from 'react';
import './index.less';

const VideoBackground = (props) => {
  return (
    <div className="video_bg">
      <video loop="true" autoPlay="true" preload="metadata" poster={props.poster} className="home_page_video" src={props.src} playsInline muted />
    </div>
  );
};

export default VideoBackground;

VideoBackground.displayName = 'VideoBackground';
