/**
 * Created by User on 25.09.2016.
 */

import React, {PropTypes} from 'react';
import { Link } from 'react-scroll';

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
      <li>
        <Link
          activeClass="active"
          className="test1"
          to={this.props.url}
          smooth={true}
          duration={500}
        >{this.props.text}</Link>
      </li>
    );
  }
}

NavigationElement.propTypes = propTypes;

export default NavigationElement;
