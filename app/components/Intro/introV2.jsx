import React from 'react';

const propTypes = {
  route: React.PropTypes.object,
};

class IntroV2 extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div className="intro--v2">
        <div className="vAlign">
          <h1>{this.props.route.title}</h1>
        </div>
      </div>
    );
  }
}

IntroV2.propTypes = propTypes;


export default IntroV2;
