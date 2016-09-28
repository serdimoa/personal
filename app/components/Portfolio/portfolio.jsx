import React from 'react';
import PortfolioItem from './portfolio__item';

const skill = [
  {
    skill: 'Python, Django, SCSS, HTML5',
    name: 'pgtpizza.ru',
    link: 'http://pgtpizza.ru',
    image: 'pgtpizza.jpg',
  },
  {
    skill: 'Python1, Django1, SCSS1, HTML5',
    name: 'pgtpizza.ru',
    link: 'http://pgtpizza.ru',
    image: 'image',
  },
];

function Portfolio() {
  return (
    <div className="portfolio">
      { skill.map((item, key) =>
        <PortfolioItem
          key={key}
          link={item.link}
          image={item.image}
          name={item.name}
          skils={item.skill}
        />
      )
      }
    </div>
  );
}

export default Portfolio;
