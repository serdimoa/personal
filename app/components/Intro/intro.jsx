/**
 * Created by dmitr on 25.09.2016.
 */
import React from 'react';
import { Link } from 'react-scroll';

function Intro() {
  return (
    <div className="intro">
      <div className="vAlign">
        <h1>Web Development Well</h1>
        <div className="intro__about">
          <ul>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>etc</li>
          </ul>
        </div>
        <Link
          className="intro__button"
          to="portfolio"
          smooth
          duration={500}
        >Portfolio
          <i className="material-icons">keyboard_arrow_down</i></Link>
      </div>
    </div>
  );
}

export default Intro;
