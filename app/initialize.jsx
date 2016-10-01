import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Intro from './components/Intro/intro';

const load = () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute components={{ content: Home, headerContent: Intro }} />
        <Route path="/aboutMe" components={{ content: AboutMe }} />
      </Route>
    </Router>,
  document.querySelector('#app')
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
