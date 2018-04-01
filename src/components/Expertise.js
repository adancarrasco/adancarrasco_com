import React from 'react';

class Expertise extends React.Component {
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
                  <p>{expertiseItem.city}</p>
                </div>
                <div className="exp-details col-sm-8">
                  <h5>{expertiseItem.jobTitle}</h5>
                  <p>{expertiseItem.description}</p>
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
