import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';

import Portfolio from './components/portfolio';
import Project from './components/project';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/projects/:id' component={Project} />
        <Route path='/' component={Portfolio} />
      </Switch>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
