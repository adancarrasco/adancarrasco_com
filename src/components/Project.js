import React from 'react';

class Project extends React.Component {
  goToProject = (event, projectId) => {
    event.preventDefault();
    this.props.history.push(`/project/${projectId}`);
  };

  render() {
    const {project} = this.props;
    return (
      <div
        className="project-container col-xs-12 col-sm-6 col-md-4"
        key={project.title}
      >
        <img
          src={project.homePageThumb}
          alt={project.title}
          className={project.className || ''}
        />
        <div className="project-details-container">
          <div className="project-details-opacity" />
          <div className="project-details">
            <h4 className="project-title">{project.title}</h4>
            <p className="project-desc">{project.description}</p>
            <button
              onClick={event => this.goToProject(event, project.id)}
              className="view-project"
            >
              View project
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Project;
