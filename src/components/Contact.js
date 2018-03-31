import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <footer>
        <div className="contact-container">
          <div className="container bg-black">
            <section className="contact relative">
              <h2>Get in touch</h2>
              <div className="row" />
            </section>
          </div>
        </div>
        <ul className="container social-links">
          <li>
            <a
              href="http://twitter.com/adancarrasco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a
              href="http://mx.linkedin.com/in/adancarrasco/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin" />
            </a>
          </li>
          <li>
            <a
              href="http://instagram.com/adancarrasco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram" />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Contact;
