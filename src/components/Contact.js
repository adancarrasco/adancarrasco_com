import React from 'react';

const Contact = props => (
  <footer>
    <div className="contact-container">
      <div className="container bg-black">
        <section className="contact relative">
          <h2>Get in touch</h2>
          <div className="row" />
        </section>
        <ul className="container social-links">
          <li>
            <a
              href="http://twitter.com/adancarrasco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a
              href="http://mx.linkedin.com/in/adancarrasco/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li>
            <a
              href="http://instagram.com/adancarrasco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Contact;
