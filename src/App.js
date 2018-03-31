import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PersonalDetails from './components/PersonalDetails';
import Skills from './components/Skills';
import Expertise from './components/Expertise';
import MyMotto from './components/MyMotto';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PersonalDetails />
        <Skills />
        <Expertise />
        <MyMotto />
        <Contact />
      </div>
    );
  }
}

export default App;
