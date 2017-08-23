import React from 'react';
import './index.less';

const App = (props) => {
  return (
    <div className="app">
      { props.children }
    </div>
  );
};

export default App;

App.displayName = 'App';
