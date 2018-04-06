import React, {Component, Fragment} from 'react';
import experienceData from './data/experience.json';
import skillsData from './data/skills.json';
import projectsData from './data/projects.json';
import './App.css';
import Header from './components/Header';
import PersonalDetails from './components/PersonalDetails';
import Skills from './components/Skills';
import Experience from './components/Experience';
import MyMotto from './components/MyMotto';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';

class App extends Component {
  state = {
    experienceItems: experienceData.experience,
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
        <Contact />
      </Fragment>
    );
  }
}

export default App;
