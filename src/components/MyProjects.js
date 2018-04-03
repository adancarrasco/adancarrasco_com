import React from 'react';

const MyProjects = props => {
  const renderProject = project => (
    <div
      className="project-container col-xs-12 col-sm-6 col-md-4"
      key={project.title}
    >
      <img src={project.image} alt={project.title} />
      <div className="project-details-container">
        <div className="project-details-opacity" />
        <div className="project-details">
          <h5 className="project-title">{project.title}</h5>
          <p className="project-desc">{project.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="projects">
      <div className="container">
        <h4>My Projects</h4>
        <div className="projects-container">
          <div className="projects-container row">
            {props.projects.map(renderProject)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
