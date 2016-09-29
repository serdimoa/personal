import React from 'react';
import Rebase from 're-base';

import PortfolioItem from './portfolio__item';

const base = Rebase.createClass({
  apiKey: 'AIzaSyA_oP0jcBJpOJ_cbLOK3JxtPWUbyxc9wkQ',
  authDomain: 'personal-17bfb.firebaseapp.com',
  databaseURL: 'https://personal-17bfb.firebaseio.com',
  storageBucket: 'personal-17bfb.appspot.com',
});

function Portfolio() {
  base.fetch('sales', {
    context: this,
    asArray: true,
    then(data){
      console.log(data);
    },
  });
  return (
    <div className="portfolio">
      { //skill.map((item, key) =>
        /*<PortfolioItem
          key={key}
          link={item.link}
          image={item.image}
          name={item.name}
          skils={item.skill}
          color={item.color}
        />*/
        //)
      }
    </div>
  );
}

export default Portfolio;
