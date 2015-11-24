import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import HomeViewContainer     from 'containers/HomeViewContainer';
import SearchViewContainer     from 'containers/SearchViewContainer';

export default (
  <Route component={CoreLayout}>
    <IndexRoute component={HomeViewContainer} />
  	<Route path='/' component={HomeViewContainer} />
  	<Route path='todayspecial' component={SearchViewContainer} />
  	<Route path='home' component={HomeViewContainer} />
  </Route>
);
