import React from 'react';
import Header from './Header.jsx';
import HighScores from './HighScores.jsx';
import Question from './Question.jsx';

const App = (props) => {

  return (
    <div>
      <Header />
      <Question />
      <HighScores />
    </div>
  );
};


export default App;
