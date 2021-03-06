import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import About from './About/about';

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
      </CSSTransitionGroup>
    </div>
  );
}


export default AboutMe;
