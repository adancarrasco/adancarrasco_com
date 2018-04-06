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
          >
            <i className="material-icons exp-company-link">language</i>
            {experienceItem.website}
          </a>
        </Fragment>
      );
    }
  }
  render() {
    return (
      <div className="experience">
        <div className="container">
          <h3>Experience</h3>
          {this.props.experience.map(experienceItem => (
            <div className="exp-wrapper" key={experienceItem.period}>
              <div className="exp-item row">
                <div className="exp-date-range col-sm-3">
                  <h5>{experienceItem.company}</h5>
                  <span>{experienceItem.period}</span>
                </div>
                <div className="exp-details col-sm-8">
                  <h5>{experienceItem.jobTitle}</h5>
                  <p>{experienceItem.description}</p>
                  <span className="exp-location">
                    <i className="material-icons">location_on</i>
                    {experienceItem.city}
                  </span>
                  {this.hasWebSite(experienceItem)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Experience;
