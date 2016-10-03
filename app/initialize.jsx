import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Intro from './components/Intro/intro';
import IntroV2 from './components/Intro/introV2';

const load = () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute components={{ content: Home, headerContent: Intro }} />
        <Route
          path="/aboutMe"
          title="Обо мне"
          components={{ content: AboutMe, headerContent: IntroV2 }}
        />
        <Route
          path="/contact"
          title="Контакты"
          components={{ content: Contact, headerContent: IntroV2 }}
        />
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
