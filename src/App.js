import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';


function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
  
      Latest Articles
  
      By Claire Robinson
      Receive money in any currency with no fees
      The world is getting smaller and we’re becoming more mobile. So why should you be 
      forced to only receive money in a single …
  
      By Wilson Hutton
      Treat yourself without worrying about money
      Our simple budgeting feature allows you to separate out your spending and set 
      realistic limits each month. That means you …
  
      By Wilson Hutton
      Take your Easybank card wherever you go
      We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
      while you’re abroad. We’ll even show you …
  
      By Claire Robinson
      Our invite-only Beta accounts are now live!
      After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
      It’s easy to request an invite through the site ...
  
    
  
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
