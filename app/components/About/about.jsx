import React from 'react';
import { Element } from 'react-scroll';

function About() {
  return (
    <Element name="aboutMe" className="aboutMe">
      <h2>Обо мне</h2>
      <div className="aboutMe__content">
        <p>Привет, меня зовут Дмитрий и Я Веб-разработчик.</p>
        <p>Люблю изучать, внедрять и разрабатывать нечто новое.</p>
        <p>Считаю необходимым решать проблемы до их появления.</p>
        <p>При разработке учитываю <a rel="noopener noreferrer" target="_blank" href="https://www.python.org/dev/peps/pep-0020/#the-zen-of-python">The Zen of Python <i className="material-icons">touch_app</i></a></p>
        <p>Нравится Python, Django, React, ECMAScript 6, SCSS, БЕМ и многое другое.</p>
      </div>
      <h3>Разрабатывал реально работающие проекты на:</h3>
      <div className="aboutMe__skills">
        <p><a rel="noopener noreferrer" target="_blank" href="http://pgtpizza.ru">Python + Django + HTML + SCSS + Design <i className="material-icons">touch_app</i></a></p>
        <p><a rel="noopener noreferrer" target="_blank" href="http://tl-nv.ru">Es6 + React + Redux + Express <i className="material-icons">touch_app</i></a></p>
        <p><a rel="noopener noreferrer" target="_blank" href="http://vincenzo-pizza.com/">Python + Flask + HTML + SCSS + Local Storage API + Lazy Load + Design <i className="material-icons">touch_app</i> </a></p>
        <p><a rel="noopener noreferrer" target="_blank" href="http://xn-----6kcgb1bckzqdbkhbgclghej8q7d.xn--p1ai/">Laravel + HTML + SCSS <i className="material-icons">touch_app</i></a></p>
      </div>
      <div className="aboutMe__other">
        <p>Также имею опыт в разработке на PHP, JAVA(ANDROID) и node.js.
          Использую git, webpack, gulp, brunch.js.
          Понимаю ООП, MVC, различие REST vs RESTful, MySQL, MongoDB, Firebase.
        </p>
      </div>
    </Element>
  );
}

export default About;
