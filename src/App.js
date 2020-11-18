import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Articles from './components/Articles';


function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Articles />
      About Us
      Contact
      Blog
      Careers
      Support
      Privacy Policy
  
      Request Invite
  
      © Easybank. All Rights Reserved
    
      <div className="attribution">
        Challenge by 
        {' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>
        . 
        Coded by
        {' '}
        <a href="#">Your Name Here</a>
        .
      </div>
    </>
  );
}

export default App;
