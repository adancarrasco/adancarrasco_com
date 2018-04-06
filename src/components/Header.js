import React from 'react';

const Header = props => (
  <header className="header">
    <div className="header container">
      <a
        id="myName"
        className="left"
        title="adancarrasco.com"
        onClick={() => {
          props.history.push('/');
        }}
      >
        ADÁN CARRASCO
      </a>
      <nav>
        <ul>
          <li>{/* <a href="http://blog.adancarrasco.com">BLOG</a> */}</li>
          <li>
            <a href="https://github.com/adancarrasco">
              <i className="fab fa-github" /> GitHub
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
