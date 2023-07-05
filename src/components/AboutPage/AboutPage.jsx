import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h1>About</h1>
        <p>Shout out the fine people over at Spoonacular for creating an easy to use API that allowed my app to function to its fullest</p>
        <p>Technologies used:</p>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
          <li>postgreSQL</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <p>Special thanks to our Diamond Cohort, Liz, Dane, Chris Black, Matt Black, Emma and all of the amazing Prime staff!</p>
        <p>Additional features I'd like to add...</p>
      </div>
    </div>
  );
}

export default AboutPage;
