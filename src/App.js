import React, {Component} from 'react';
import expertiseData from './data/expertise.json';
import skillsData from './data/skills.json';
import './App.css';
import Header from './components/Header';
import PersonalDetails from './components/PersonalDetails';
import Skills from './components/Skills';
import Expertise from './components/Expertise';
import MyMotto from './components/MyMotto';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';

class App extends Component {
  state = {
    expertiseItems: expertiseData.expertise,
    skillsItems: skillsData.skills,
  };
  render() {
    return (
      <div className="App">
        <Header />
        <PersonalDetails />
        <Skills skills={this.state.skillsItems} />
        <Expertise expertise={this.state.expertiseItems} />
        <MyMotto />
        <MyProjects />
        <Contact />
      </div>
    );
  }
}

export default App;