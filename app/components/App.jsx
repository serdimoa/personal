import React from 'react';
import ScrollArea  from 'react-scrollbar';
import Header from './Header/header';
import About from './About/about';

function App() {
  return (
    <ScrollArea
      speed={0.8}
      className="area"
      contentClassName="content"
      horizontal={false}
    >
      <div className="content" style={{ position: 'relative' }}>
        <Header />
        <About />
      </div>
    </ScrollArea>
  );
}

export default App;
