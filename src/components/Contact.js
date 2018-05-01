import React from 'react';

const Contact = props => (
  <footer>
    <div className="contact-container">
      <div className="container bg-black">
        <section className="contact relative">
          <h3>Get in touch</h3>
          <div className="contact-get-in-touch">
            <p>Let's get in touch, you can find me in the following places.</p>
            <ul className="social-links">
              <li>
                <a
                  href="https://twitter.com/adancarrasco"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Find me on Twitter."
                >
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://mx.linkedin.com/in/adancarrasco/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Find me on LinkedIn."
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/adancarrasco"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Find me on Instagram."
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/adancarrasco"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Find me on GitHub."
                >
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a
                  href="http://adancarrasco.com/Resume_AdanCarrasco_2018.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Resume PDF."
                >
                  <i className="fa fa-file-pdf" />
                </a>
              </li>
            </ul>
          </div>
          <span className="build-with">
            Built with{' '}
            <a title="React" href="http://reactjs.org/">
              React
            </a>,{' '}
            <a title="Webpack" href="http://webpack.js.org/">
              Webpack
            </a>{' '}
            and{' '}
            <a title="Sass" href="http://sass-lang.com/">
              Sass
            </a>.
          </span>
          <span className="made-in">
            &copy; 2018 Adán Carrasco. Made in CUU.
          </span>
        </section>
      </div>
    </div>
  </footer>
);

export {Contact};
