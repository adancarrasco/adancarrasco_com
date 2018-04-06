import React, {Fragment} from 'react';

class Expertise extends React.Component {
  hasWebSite(expertiseItem) {
    if (expertiseItem.website) {
      return (
        <Fragment>
          <span> | </span>
          <a
            href={expertiseItem.website}
            title={expertiseItem.company}
            target="_blank"
          >
            <i className="material-icons exp-company-link">language</i>
            {expertiseItem.website}
          </a>
        </Fragment>
      );
    }
  }
  render() {
    return (
      <div className="experience">
        <div className="container">
          <h3>Expertise</h3>
          {this.props.expertise.map(expertiseItem => (
            <div className="exp-wrapper" key={expertiseItem.period}>
              <div className="exp-item row">
                <div className="exp-date-range col-sm-3">
                  <h5>{expertiseItem.company}</h5>
                  <span>{expertiseItem.period}</span>
                </div>
                <div className="exp-details col-sm-8">
                  <h5>{expertiseItem.jobTitle}</h5>
                  <p>{expertiseItem.description}</p>
                  <span className="exp-location">
                    <i className="material-icons">location_on</i>
                    {expertiseItem.city}
                  </span>
                  {this.hasWebSite(expertiseItem)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Expertise;
