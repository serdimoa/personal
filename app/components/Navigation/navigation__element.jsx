/**
 * Created by User on 25.09.2016.
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
};

class NavigationElement extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <Link
        activeClassName="active"
        to={this.props.url}
      >{this.props.text}</Link>
    );
  }
}

NavigationElement.propTypes = propTypes;

export default NavigationElement;
