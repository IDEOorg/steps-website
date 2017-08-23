import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router';
import App from '../containers/App';
import MainPage from '../containers/MainPage';

const Routes = (props) => {
  return (
    <Router history={props.history}>
      <Route component={App}>
        <Route path="/" component={MainPage} />
      </Route>
    </Router>
  );
};

export default Routes;

Routes.propTypes = {
  history: PropTypes.object.isRequired
};
