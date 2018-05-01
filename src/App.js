import React, {Component, Fragment} from 'react';
import experienceData from './data/experience.json';
import skillsData from './data/skills.json';
import projectsData from './data/projects.json';
import './App.css';
import {
  Header,
  PersonalDetails,
  Skills,
  Experience,
  MyMotto,
  MyProjects,
  Contact,
  VolunteerSection,
} from './components';

class App extends Component {
  state = {
    experienceItems: experienceData,
    skillsItems: skillsData.skills,
    projectsItems: projectsData.projects,
  };
  render() {
    return (
      <Fragment>
        <Header history={this.props.history} />
        <PersonalDetails />
        <Skills skills={this.state.skillsItems} />
        <Experience experience={this.state.experienceItems} />
        <MyMotto />
        <MyProjects
          projects={this.state.projectsItems}
          history={this.props.history}
        />
        <VolunteerSection />
        <Contact />
      </Fragment>
    );
  }
}

export default App;
