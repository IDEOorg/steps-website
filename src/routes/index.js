import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router';
import App from '../containers/App';
import MainPage from '../containers/MainPage';
import GetInvolvedPage from '../containers/GetInvolvedPage';
import HowWeWorkPage from '../containers/HowWeWorkPage';
import MissionPage from '../containers/MissionPage';
import constants from '../data/constants';
import withTracker from '../globals/withTracker';

const Routes = (props) => {
  return (
    <Router history={props.history}>
      <Route component={withTracker(App)}>
        <Route path={constants.routes.home} component={MainPage} />
        <Route path={constants.routes['get-involved']} component={GetInvolvedPage} />
        <Route path={constants.routes['how-we-work']} component={HowWeWorkPage} />
        <Route path={constants.routes.mission} component={MissionPage} />
      </Route>
    </Router>
  );
};

export default Routes;

Routes.propTypes = {
  history: PropTypes.object.isRequired
};
