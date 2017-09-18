import React from 'react';
import './index.less';

const VideoBackground = (props) => {
  return (
    <div className="video_bg">
      <video loop="true" autoPlay="true" preload="metadata" poster="https://static1.squarespace.com/static/58acc4a603596e36163ab018/5925e3e5e3df2813a1f3266b/59c00155b7411cde538219d8/1505755478170/steps-bg.jpg" onLoad={() => { console.log('vid loaded'); }} src={props.src} playsInline muted />
    </div>
  );
};

export default VideoBackground;

VideoBackground.displayName = 'VideoBackground';
