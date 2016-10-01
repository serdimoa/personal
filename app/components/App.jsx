import React, { PropTypes } from 'react';
import Header from './Header/header';
import { RouteTransition } from 'react-router-transition';

const propTypes = {
  content: PropTypes.object,
  headerContent: PropTypes.object,
};

class App extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    const { content, headerContent } = this.props;
    return (
      <div className="content" style={{ position: 'relative' }}>
        <Header>{ headerContent }</Header>
        <RouteTransition
          pathname={this.props.location.pathname}
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
        >{content}</RouteTransition>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
