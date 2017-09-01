import React, { Component } from 'react';
import Slider from 'react-slick';
import './index.less';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0
    };

    this.beforeChange = this.beforeChange.bind(this);
    this.afterChange = this.afterChange.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      // slick initial sizing bug ref: https://github.com/akiran/react-slick/issues/809
      this.slick.innerSlider.onWindowResized();
    }, 0);
  }

  afterChange(currentSlide) {
    this.setState({ currentSlide });
  }

  render() {
    const images = this.props.slides.map((imageName, index) => {
      const overlayClasses = `carousel__overlay ${index === this.state.currentSlide ? 'active' : ''}`;
      const overlay = <img className={overlayClasses} src={require(`../../assets/${imageName}.png`)} />; // eslint-disable-line
      const image = <img src={require(`../../assets/${imageName}.jpg`)} />; // eslint-disable-line
      return (
        <div className="carousel__slide" key={imageName}>
          {overlay}
          {image}
        </div>
      );
    });

    const settings = {
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
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
