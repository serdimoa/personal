import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Contacts from './Contacts/contacts';

function Contact() {
  return (
    <div>
      <CSSTransitionGroup
        transitionName={'window-blur'}
        transitionAppear
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <Contacts />
      </CSSTransitionGroup>
    </div>
  );
}

export default Contact;
