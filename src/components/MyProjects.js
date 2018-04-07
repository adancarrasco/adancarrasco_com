import React from 'react';
import Project from './Project';

class MyProjects extends React.Component {
  render() {
    return (
      <div className="projects">
        <div className="container">
          <h4>My Projects</h4>
          <div className="projects-container">
            <div className="projects-container row">
              {this.props.projects.map(project => (
                <Project
                  project={project}
                  key={project.id}
                  history={this.props.history}
                />
              ))}
            </div>
          </div>
          <div className="create-project-container">
            <a
              href="mailto:hello@adancarrasco.com"
              className="create-a-project-btn"
            >
              Let's create a project
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MyProjects;
