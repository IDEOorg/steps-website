import React from 'react';
import classNames from 'classnames';
import './index.less';
// import Carousel from '../../components/Carousel';

const PrototypeSection = (props) => {
  let buttons = null;
  let mediaSection = null;
  if (props.video) {
    mediaSection = <iframe src={props.video} title="Next Week" width="768" height="432" frameBorder="0" />;
  } else if (props.image) {
    mediaSection = <img src={props.image} alt="Prototype" className="prototype_img" />;
  }
  if (props.buttons) {
    buttons = props.buttons.map((button) => {
      return (
        <p className="prototype_link">
          <a href={button.url}>{button.text}</a>
        </p>
      );
    });
  }
  return (
    <div className={classNames("prototype_section", props.styling)}>
      <h2>{props.title}</h2>
      <div className="prototype_img_section">
        { mediaSection }
        <p className="prototype_caption">{props.caption}</p>
      </div>
      <div className="prototype_description_section">
        <p>{props.description}</p>
        <div className="prototype_links">
          { buttons }
        </div>
      </div>
    </div>
  );
};

export default PrototypeSection;
