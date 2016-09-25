/**
 * Created by User on 25.09.2016.
 */

import React, { PropTypes } from 'react';

const propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
};

class NavigationElement extends React.Component {
  static methodsAreOk() {
    return true;
  }
  render() {
    return <li><a href={this.props.url}>{this.props.text}</a></li>;
  }
}

NavigationElement.propTypes = propTypes;

export default NavigationElement;
