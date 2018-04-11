import React from 'react';
import personalDetails from '../data/personalDetails';

const PersonalDetails = props => {
  const {personalData} = personalDetails;
  const {aboutMe} = personalDetails;
  return (
    <div className="container">
      <section className="personal-details">
        <h3>Personal Details</h3>
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-xs-12 profile-pic-container">
            <img
              id="profile-pic"
              alt={personalDetails.profilePic.alt}
              src={personalDetails.profilePic.url}
              className="profile-pic"
            />
            <img
              id="profile-pic-hover"
              alt={personalDetails.profilePicHover.alt}
              src={personalDetails.profilePicHover.url}
              className="profile-pic-hover"
            />
          </div>
          <ul className="col-lg-3 col-sm-6 col-xs-12 personal-info">
            {Object.keys(personalData).map((item, i) => (
              <li key={i}>
                {personalData[item].title} {personalData[item].value}
              </li>
            ))}
            <li>
              {personalDetails.email.title}{' '}
              <a
                href={'mailto:' + personalDetails.email.email}
                title={personalDetails.email.anchorTitle}
              >
                {personalDetails.email.value}
              </a>
            </li>
          </ul>
          <div className="col-lg-6 col-sm-12 col-xs-12">
            <h4>{aboutMe.title}</h4>
            {aboutMe.descImageSide.map((item, i) => <p key={i}>{item}</p>)}
          </div>
          <div className="col-xs-12 col-sm-12">
            {aboutMe.descBelowImage.map((item, i) => <p key={i}>{item}</p>)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalDetails;
