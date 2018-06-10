import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import {ProjectContainer, NotFound} from './';

const Router = () => (
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <Switch>
      <Route exact path="/" render={ (routerProps) => <App {...this.props} />} />
      <Route path="/project/:projectId" component={ProjectContainer} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
