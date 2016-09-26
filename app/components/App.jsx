import React from 'react';
import Header from './Header/header';
import About from './About/about';
import Contacts from './Contacts/contacts'

function App() {
  return (
    <div className="content" style={{ position: 'relative' }}>
      <Header />
      <About />
      <Contacts />
    </div>
  );
}

export default App;
