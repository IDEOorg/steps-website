import React, { Component } from 'react';
import _ from 'lodash';
import './index.less';

class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.getCoords()};

    this.onResizeDebounced = _.debounce(this.onResize.bind(this), 250);
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResizeDebounced);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResizeDebounced);
  }

  onResize() {
    const coords = this.getCoords();
    this.setState({...coords});
  }

  getCoords() {
    const coverRatio = this.props.width / this.props.height;
    let newCoverWidth = 0;
    let newCoverHeight = 0;
    let newCoverX = 0;
    let newCoverY = 0;

    if (window.innerWidth / coverRatio > window.innerHeight) {
      newCoverWidth = window.innerWidth;
      newCoverHeight = window.innerWidth / coverRatio;
      newCoverX = 0;
      newCoverY = Math.round((window.innerHeight - newCoverHeight) / 2);
    } else {
      newCoverHeight = window.innerHeight;
      newCoverWidth = window.innerHeight * coverRatio;
      newCoverX = Math.round((window.innerWidth - newCoverWidth) / 2);
      newCoverY = 0;
    }

    return {
      coverWidth: newCoverWidth,
      coverHeight: newCoverHeight,
      coverX: newCoverX,
      coverY: newCoverY
    };
  }

  render() {
    const styles = {
      width: `${this.state.coverWidth}px`,
      height: `${this.state.coverHeight}px`,
      top: `${this.state.coverY}px`,
      left: `${this.state.coverX}px`
    };

    return (
      <div className="cover_component">
        <div
          className="cover_component_inner"
          style={styles}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Cover;

Cover.displayName = 'Cover';
