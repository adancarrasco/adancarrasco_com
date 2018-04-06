import React, {Fragment} from 'react';
import Header from './Header';

import projectsData from '../data/projects.json';

class Project extends React.Component {
  componentWillMount() {
    const project = projectsData.projects.find(
      project => project.id === this.props.match.params.projectId
    );
    this.setState({project});
  }
  render() {
    const {project} = this.state;
    return (
      <Fragment>
        <Header history={this.props.history} />
        <section className="container project-container">
          <div className="project-definition">
            <h1>{project.title}</h1>
            {project.longDescription.map((desc, i) => <h3 key={i}>{desc}</h3>)}
            <p>{`Current state: ${project.state}`}</p>
            <a
              href={project.website}
              target="_blank"
              className="view-project go-to-website"
            >
              Go to Web Site
            </a>
          </div>
          <div className="project-screens-container">
            <h5>These are some of the project drafts and screenshots.</h5>
            {project.images.map((image, i) => (
              <div key={i} className="project-image-container">
                <img alt={image.alt} src={image.src} />
              </div>
            ))}
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Project;
