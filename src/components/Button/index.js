import React from 'react';
import classNames from 'classnames';
import './index.less';

const Button = (props) => {
  return (
    <div className={classNames("button", props.styling)}>
      {props.children}
    </div>
  );
};

export default Button;

Button.displayName = 'Button';
