import React, { PropTypes } from 'react';

const propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
  name: PropTypes.string,
  skils: PropTypes.string,
};

class PortfolioItem extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div className="portfolio__item">
        <a href={this.props.link} rel="noopener noreferrer" target="_blank">
          <img src={`images/${this.props.image}`} alt={this.props.name} className="portfolio__image" />
          <h3>{this.props.skils}</h3>
        </a>
      </div>

    );
  }
}

PortfolioItem.propTypes = propTypes;

export default PortfolioItem;
