import React from 'react';
import classNames from 'classnames';
import './index.less';

const Button = (props) => {
  return (
    <a className="button_style" href={props.url} target="_blank">
      <div className={classNames("button", props.styling)}>
        {props.children}
      </div>
    </a>
  );
};

export default Button;

Button.displayName = 'Button';
