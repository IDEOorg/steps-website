import React, { Component } from 'react';
import Slider from 'react-slick';
import './index.less';

class Carousel extends Component {
  componentDidMount() {
    // slick initial sizing bug ref: https://github.com/akiran/react-slick/issues/809
    setTimeout(this.slick.innerSlider.onWindowResized, 0);
    setTimeout(this.slick.innerSlider.onWindowResized, 500);
  }

  render() {
    const images = this.props.slides.map((imageName) => {
      const image = <img src={imageName} />; // eslint-disable-line
      return (
        <div className="carousel__slide" key={imageName}>
          <div className="inner">
            {image}
          </div>
        </div>
      );
    });

    const settings = {
      adaptiveHeight: true,
      autoplay: false,
      autoplaySpeed: 5000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: this.beforeChange,
      afterChange: this.afterChange
    };

    return (
      <div className="carousel">
        <Slider className="carousel__frame" {...settings} ref={(c) => { this.slick = c; }}>
          {images}
        </Slider>
      </div>
    );
  }
}

export default Carousel;

Carousel.displayName = 'Carousel';
