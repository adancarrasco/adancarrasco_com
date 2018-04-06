import React from 'react';

const PersonalDetails = props => (
  <div className="container">
    <section className="personal-details">
      <h3>Personal Details</h3>
      <div className="row">
        <div className="col-lg-3 col-sm-6 col-xs-12">
          <img
            id="profile-pic"
            alt="Adán Carrasco Profile Pic"
            src="./profile-pic.jpg"
            className="profile-pic"
          />
        </div>
        <ul className="col-lg-3 col-sm-6 col-xs-12 personal-info">
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
        <div className="col-lg-6 col-sm-12 col-xs-12">
          <h4>About me</h4>
          <p>
            Software Engineer specialist in Web and Hybrid Mobile Apps
            Development. Loving and manipulating JavaScript from Vanilla to
            High-End Libraries and Frameworks as React and Angular. Fluent in
            Back-End Languages and Frameworks as NodeJS, Java, Ruby on Rails,
            C#, ASP.NET.
          </p>
          <p>
            I started loving computers when I was 12 years old, back then my
            Operative System was broken due to a Trojan virus that removed
            important startup files and I restored it by using only MS-DOS commands
            and copied the missing files from the installation CD into the Hard
            Drive. From that moment I felt the power that computers have and
            that creating Software I could help other people to make their lifes
            easier, doing the Software they need to accomplish their work,
            improving their lifes and connecting with others.
          </p>
          <p>
            That's why I love creating Software, I can tell the computers and
            now smartphones and tablets through poems only they understand
            (code) how to help people and how to automate their tasks and
            duties, that's the best part of my career as a Software Engineer.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default PersonalDetails;
