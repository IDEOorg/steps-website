import React from 'react';
import './index.less';

const Button = (props) => {
  return (
    <div className="button">
      <p>{props.text}</p>
    </div>
  );
};

export default Button;

Button.displayName = 'Button';
