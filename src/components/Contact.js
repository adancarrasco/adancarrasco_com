import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <footer>
        <div class="contact-container">
          <div class="container bg-black">
            <section class="contact relative">
              <h2>Get in touch</h2>
              <div class="row" />
            </section>
          </div>
        </div>
        <ul class="container social-links">
          <li>
            <a href="http://twitter.com/adancarrasco" target="_blank">
              <i class="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="http://mx.linkedin.com/in/adancarrasco/en" target="_blank">
              <i class="fa fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="http://instagram.com/adancarrasco" target="_blank">
              <i class="fa fa-instagram" />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Contact;
