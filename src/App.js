import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Articles from './components/Articles';
import Footer from './components/Footer';


function App() {
  return (
    <div className="overflow">
      <Header />
      <Main />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
