import React from 'react';

const VolunteerSection = () => {
  return (
    <div className="volunteer-section">
      <div className="container">
        <h3>Volunteer</h3>
        <h5>
          Web Development Trends in 2017 and best practices. Talk given in
          Tepic, Nayarit.
        </h5>
        <p>
          Gave a talk about "Web Development Trends in 2017 and best practices",
          in an event hosted at Tepic, Nayarit, México, about Technology
          organized by the Instituto Tecnológico de Tepic. The audience was
          composed of students, teachers and professionals related to Software
          Development area.
        </p>
        <a
          className="talk-news-link"
          href="http://www.ittepic.edu.mx/comunicacion/boletin/732"
          title="Open event news"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="far fa-newspaper" />
          Go to event news
        </a>
      </div>
    </div>
  );
};

export {VolunteerSection};
