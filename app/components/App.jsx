import React from 'react';
import Header from './Header/header';
import About from './About/about';
import Contacts from './Contacts/contacts'
import Portfolio from './Portfolio/portfolio'

function App() {
  return (
    <div className="content" style={{ position: 'relative' }}>
      <Header />
      <Portfolio />
      <About />
      <Contacts />
    </div>
  );
}

export default App;
