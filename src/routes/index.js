import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import HomeViewContainer              from 'containers/HomeViewContainer';

export default (
  <Route component={CoreLayout}>
    <IndexRoute component={HomeViewContainer} />
  	<Route path='/' component={HomeViewContainer} />
  	<Route path='about' component={HomeViewContainer} />
  	<Route path='home' component={HomeViewContainer} />
  </Route>
);
