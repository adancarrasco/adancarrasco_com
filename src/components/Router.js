import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import {ProjectContainer, NotFound} from './';

const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL} onUpdate={() => window.scrollTo(0, 0)}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/project/:projectId" component={ProjectContainer} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
