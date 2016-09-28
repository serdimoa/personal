import React from 'react';
import PortfolioItem from './portfolio__item';

const skill = [
  {
    skill: 'Python, Django, SCSS, HTML5',
    name: 'pgtpizza.ru',
    link: 'http://pgtpizza.ru/',
    image: 'pgtpizza.jpg',
    color: '#ffffff',
  },
  {
    skill: 'Express, React, Redux, SCSS, Webpack',
    name: 'tl-nv.ru',
    link: 'http://tl-nv.ru/',
    image: 'tl-nv.png',
    color: '#33363B',
  },
  {
    skill: 'Flask, SCSS, HTML5, Lazy Load, Local Storage API',
    name: 'vincenzo-pizza.com',
    link: 'http://vincenzo-pizza.com/',
    image: 'Sir2.png',
    color: '#000',
  },
  {
    skill: 'PHP, Silex, HTML5, CSS, jQuery, webix',
    name: 'art-parom.ru',
    link: 'http://art-parom.ru/',
    image: 'artparom.png',
    color: '#33363B',
  },
  {
    skill: 'Laravel, HTML5, SCSS',
    name: 'квартиры-от-сибпромстроя.рф',
    link: 'http://xn-----6kcgb1bckzqdbkhbgclghej8q7d.xn--p1ai/',
    image: 'sibpromstroy.png',
    color: '#EEEDFB',
  },
  {
    skill: 'Wordpress, HTML5, SCSS, jQuery',
    name: 'okbnv.ru',
    link: 'http://okbnv.ru/',
    image: 'okbnv.jpg',
    color: '#ffffff',
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
          color={item.color}
        />
      )
      }
    </div>
  );
}

export default Portfolio;
