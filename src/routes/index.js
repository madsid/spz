import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import HomeView              from 'views/HomeView';

export default (
  <Route component={CoreLayout}>
    <IndexRoute component={HomeView} />
  	<Route path='/' component={HomeView} />
  	<Route path='about' component={HomeView} />
  	<Route path='home' component={HomeView} />
  </Route>
);
