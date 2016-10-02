/**
 * Created by User on 25.09.2016.
 */

import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Navigation from '../Navigation/navigation';

const propTypes = {
  children: React.PropTypes.object,
};

class Header extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <header>
        <Navigation />
        {this.props.children}
      </header>
    );
  }
}
Header.propTypes = propTypes;

export default Header;
