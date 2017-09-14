import React, { Component } from 'react';
import _ from 'lodash';
import Player from '@vimeo/player';
import './index.less';

class Vimeo extends Component {
  componentDidMount() {
    const options = {
      id: this.props.vimeoId,
      loop: this.props.loop || false,
      autoplay: this.props.autoplay || true
    };

    this.vimeoPlayer = new Player(this.iframe, options);
    this.vimeoPlayer.on('ended', () => {
      if (_.isFunction(this.props.onEnded)) {
        this.props.onEnded();
      }
    });
  }

  componentWillUnmount() {
    this.vimeoPlayer.off('ended');
    this.vimeoPlayer.unload();
  }

  render() {
    return <div className="vimeo_iframe_container" ref={(iframe) => { this.iframe = iframe; }} />;
  }
}

export default Vimeo;

Vimeo.displayName = 'Vimeo';
