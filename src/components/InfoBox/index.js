import React from 'react';
import classNames from 'classnames';
import './index.less';

const InfoBox = (props) => {
  return (
    <div className={classNames("info_box", props.styling)}>
      {props.children}
    </div>
  );
};

export default InfoBox;

InfoBox.displayName = 'InfoBox';
