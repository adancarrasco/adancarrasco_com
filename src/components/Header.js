import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header class="header">
        <div class="header container">
          <div id="myName" class="left">
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
  }
}

export default Header;
