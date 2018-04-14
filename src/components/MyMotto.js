import React from 'react';

const MyMotto = props => (
  <div className="my-system">
    <div className="container">
      <h3>My motto</h3>
      <p>
        I think in constant improvement and that you can always make the things
        better, always teaching and learning from others. That's the way to
        continuous growth.
      </p>
      <div className="my-motto-quote-container">
        <span className="my-motto-quote">
          "An extraordinary life is all about daily, continuous improvements in
          the areas that matter most."
        </span>
        <span>- Robin Sharma</span>
      </div>
      {/* Polish and reconsider this 
      <h5>Helping others</h5>
      <p>
        Something that makes me happy is inspiring and helping others to do what
        they want to do but don't do because of fear or some other BUTS.
      </p>*/}
    </div>
  </div>
);

export default MyMotto;
