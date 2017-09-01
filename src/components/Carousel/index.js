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

  beforeChange() {
    this.setState({ currentSlide: null });
  }

  afterChange(currentSlide) {
    this.setState({ currentSlide });
  }

  render() {
    const overlays = this.props.slides.map((imageName, index) => {
      const overlayClasses = `carousel__overlay ${index === this.state.currentSlide ? 'active' : ''}`;
      return <img className={overlayClasses} src={require(`../../assets/${imageName}.png`)} />; // eslint-disable-line
    });

    const images = this.props.slides.map((imageName, index) => {
      const image = <img src={require(`../../assets/${imageName}.jpg`)} />; // eslint-disable-line
      return (
        <div className="carousel__slide" key={imageName}>
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
      beforeChange: this.beforeChange,
      afterChange: this.afterChange
    };

    return (
      <div className="carousel">
        <div className="carousel__overlays">
          {overlays}
        </div>
        <Slider className="carousel__frame" {...settings} ref={(c) => { this.slick = c; }}>
          {images}
        </Slider>
      </div>
    );
  }
}

export default Carousel;

Carousel.displayName = 'Carousel';
