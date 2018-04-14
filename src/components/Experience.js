import React, {Fragment} from 'react';

class Experience extends React.Component {
  hasWebSite(experienceItem) {
    if (experienceItem.website) {
      return (
        <Fragment>
          <span> | </span>
          <a
            href={experienceItem.website}
            title={experienceItem.company}
            target="_blank"
            rel="noopener"
          >
            <i className="material-icons exp-company-link">language</i>
            {experienceItem.website}
          </a>
        </Fragment>
      );
    }
  }

  renderExperienceDesc(expDesc) {
    expDesc.shift();
    return (
      <ul className="exp-bullets-container">
        {expDesc.map((descItem, i) => <li key={i}>{expDesc[i]}</li>)}
      </ul>
    );
  }

  render() {
    const {experience} = this.props.experience;
    const {additionalExperience} = this.props.experience;
    return (
      <div className="experience">
        <div className="container">
          <h3>Experience</h3>
          {experience.map(experienceItem => (
            <div className="exp-wrapper" key={experienceItem.period}>
              <div className="exp-item row">
                <div className="exp-date-range col-sm-12 col-md-3 col-xl-2">
                  <h5>{experienceItem.company}</h5>
                  <span>{experienceItem.period}</span>
                </div>
                <div className="exp-details col-sm-12 col-md-9">
                  <h5>{experienceItem.jobTitle}</h5>
                  <p>{experienceItem.description[0]}</p>
                  {this.renderExperienceDesc(experienceItem.description)}
                  <span className="exp-location">
                    <i className="material-icons">location_on</i>
                    {experienceItem.city}
                  </span>
                  {this.hasWebSite(experienceItem)}
                </div>
              </div>
            </div>
          ))}
          <h5 className="exp-additional-experience">
            {additionalExperience.title}
          </h5>
          <p>{additionalExperience.text}</p>
        </div>
      </div>
    );
  }
}

export default Experience;
