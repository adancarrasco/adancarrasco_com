import React from 'react';

const Skills = props => (
  <div className="skills-container">
    <div className="container">
      <div className="row skills">
        <h3>Skills</h3>
        <ul>
          {props.skills.map(skill => <li key={skill.name}>{skill.name}</li>)}
        </ul>
      </div>
    </div>
  </div>
);

export {Skills};
