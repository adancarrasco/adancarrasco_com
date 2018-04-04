import React from 'react';

const PersonalDetails = props => (
  <div className="container">
    <section className="personal-details">
      <h3>Personal Details</h3>
      <div className="row">
        <div className="col-sm-3 col-xs-12">
          <img
            id="profile-pic"
            alt="Adán Carrasco Profile Pic"
            src="./profile-pic.jpg"
            className="profile-pic"
          />
        </div>
        <ul className="col-lg-3 col-md-3 col-sm-3 col-xs-12 personal-info">
          <li>Name: Adán Carrasco</li>
          <li>Date of birth: August 26, 1989</li>
          <li>Nationality: Mexican</li>
          <li>
            Email: &nbsp;
            <a
              href="http://www.google.com/recaptcha/mailhide/d?k=0152f29lHGrwdU1YxqHXkPUw==&amp;c=oMh6trvPt7mSACi301fq12NOrESBmpfLVdFnxwSzkWE="
              title="Reveal this e-mail address"
            >
              email me
            </a>
          </li>
        </ul>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <h4>About me</h4>
          <p>
            Software Engineer specialist in Web and Hybrid Mobile Apps
            Development. Loving and manipulating JavaScript from Vanilla to
            High-End Libraries and Frameworks as React and Angular. Fluent in
            Back-End Languages and Frameworks as NodeJS, Java, Ruby on Rails,
            C#, ASP.NET.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default PersonalDetails;
