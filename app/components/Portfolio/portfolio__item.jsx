import React, {PropTypes} from 'react';

const propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
  name: PropTypes.string,
};

class PortfolioItem extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    window.open(this.props.link);
  }

  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div className="portfolio__item" onClick={this.handleClick}>
        <img src={`images/${this.props.image}`} alt={this.props.name} className="portfolio__image"/>
      </div>
    );
  }
}

PortfolioItem.propTypes = propTypes;

export default PortfolioItem;
