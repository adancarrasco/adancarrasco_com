import React from 'react';

const Header = props => (
  <header className="header">
    <div className="header container">
      <div id="myName" className="left">
        ADÁN CARRASCO
      </div>
      <nav>
        <ul>
          <li>{/* <a href="http://blog.adancarrasco.com">BLOG</a> */}</li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;