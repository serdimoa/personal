import React, { PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
// import Header from './Header/header';
import Navigation from './Navigation/navigation';

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
        <div className="header">
          <Navigation />
          <CSSTransitionGroup
            transitionName={'window-blur'}
            transitionAppear
            transitionAppearTimeout={1000}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
            { headerContent }
          </CSSTransitionGroup>
        </div>
        {content}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
