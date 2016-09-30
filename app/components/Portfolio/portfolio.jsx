import React, { PropTypes } from 'react';
import { Element } from 'react-scroll';
import PortfolioItem from './portfolio__item';


const propTypes = {
  skills: PropTypes.object,
};


class Portfolio extends React.Component {
  static methodsAreOk() {
    return true;
  }

  constructor(props) {
    super(props);
    this.state = {
      skills: [],
    };
    this.getData();
  }

  getData() {
    firebase.database().ref('skills').once('value').then((snapshot) => {
      this.setState({ skills: snapshot.val() });
    });
  }

  render() {
    return (
      <Element name="portfolio" className="portfolio">
        {this.state.skills.map((item, key) =>
          <PortfolioItem
            key={key}
            link={item.link}
            image={item.image}
            name={item.name}
            skils={item.skill}
            color={item.color}
          />
        )}
      </Element>
    );
  }
}

Portfolio.propTypes = propTypes;

export default Portfolio;
