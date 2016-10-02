import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import About from './About/about';
import Contacts from './Contacts/contacts';

function AboutMe() {
  return (
    <div>
      <CSSTransitionGroup
        transitionName={'window-blur'}
        transitionAppear
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <About />
        <Contacts />
      </CSSTransitionGroup>
    </div>
  );
}


export default AboutMe;
