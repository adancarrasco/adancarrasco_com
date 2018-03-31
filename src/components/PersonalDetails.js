import React from 'react';

class PersonalDetails extends React.Component {
  render() {
    return (
      <div class="container">
        <section class="personal-details">
          <h3>Personal Details</h3>
          <div class="row">
            <img
              id="profile-pic"
              class="col-lg-3 col-md-3 col-sm-3 col-xs-12"
              src="img/profile-pic.jpg"
            />
            <ul class="col-lg-3 col-md-3 col-sm-3 col-xs-12 personal-info">
              <li>Name: Adán Carrasco</li>
              <li>Date of birth: August 26, 1989</li>
              <li>Nationality: Mexican</li>
              <li>
                Email:{' '}
                <a
                  href="http://www.google.com/recaptcha/mailhide/d?k=0152f29lHGrwdU1YxqHXkPUw==&amp;c=oMh6trvPt7mSACi301fq12NOrESBmpfLVdFnxwSzkWE="
                  onclick="window.open('http://www.google.com/recaptcha/mailhide/d?k\0750152f29lHGrwdU1YxqHXkPUw\75\75\46c\75oMh6trvPt7mSACi301fq12NOrESBmpfLVdFnxwSzkWE\075', '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300'); return false;"
                  title="Reveal this e-mail address"
                >
                  email me
                </a>
              </li>
            </ul>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <h4>About me</h4>
              <p>
                I'm a Software Engineer specialized in Web Development and UX. I
                consider myself as a highly passionated professional in new
                techonlogies and I like to learn new stuffs. I also like to
                develop personal projects and work with others to create awesome
                things. I've developed Web Sites and Web Applications since
                2009, among this time I have done Back-end and Front-end
                development. For Back-End I have used Java and .NET
                technologies; for Front-End I have used HTML5, CSS3, JavaScript
                as well as some Frameworks such as{' '}
                <a href="http://jquery.com" target="_blank">
                  jQuery
                </a>,{' '}
                <a href="http://d3js.org" target="_blank">
                  D3
                </a>,{' '}
                <a href="http://AngularJS.org" target="_blank">
                  AngularJS
                </a>,{' '}
                <a href="http://nodejs.org" target="_blank">
                  NodeJS
                </a>{' '}
                and some others talking about JavaScript and about CSS I have
                used{' '}
                <a href="http://getbootstrap.com/" target="_blank">
                  Bootstrap
                </a>{' '}
                and{' '}
                <a href="http://foundation.zurb.com/" target="_blank">
                  Foundation
                </a>{' '}
                as Responsive Frameworks and also I have used{' '}
                <a href="http://lesscss.org/" target="_blank">
                  Less
                </a>.
              </p>
              <p>
                I have a{' '}
                <a href="http://blog.adancarraso.com/" target="_blank">
                  blog
                </a>{' '}
                where I post some things that I consider interesting things for
                Developers and some others for UX experts. If you want to invite
                me to start a new project, create cool new things or just say
                hello feel free to contact me, would be a pleasure to know you
                and share knowlegde, experiences or{' '}
                <a
                  href="http://www.google.com/recaptcha/mailhide/d?k=0152f29lHGrwdU1YxqHXkPUw==&amp;c=oMh6trvPt7mSACi301fq12NOrESBmpfLVdFnxwSzkWE="
                  onclick="window.open('http://www.google.com/recaptcha/mailhide/d?k\0750152f29lHGrwdU1YxqHXkPUw\75\75\46c\75oMh6trvPt7mSACi301fq12NOrESBmpfLVdFnxwSzkWE\075', '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300'); return false;"
                  title="Reveal this e-mail address"
                >
                  get in touch
                </a>{' '}
                to be friends :)
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PersonalDetails;
