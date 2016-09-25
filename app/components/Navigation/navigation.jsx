/**
 * Created by User on 25.09.2016.
 */
import React from 'react';
import NavigationElement from './navigation__element';

function Navigation() {
  return (
    <nav className="navigation">
      <img src="/images/logo.svg" alt="logo" />
      <ul>
        <NavigationElement url="#" text="Контакты" />
        <NavigationElement url="#" text="Скилы" />
      </ul>
    </nav>
  );
}

export default Navigation;
