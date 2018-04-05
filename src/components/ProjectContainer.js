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
    return (
      <Fragment>
        <Header history={this.props.history} />
        <section className="container">
          <h4>{this.state.project.title}</h4>
        </section>
      </Fragment>
    );
  }
}

export default Project;
