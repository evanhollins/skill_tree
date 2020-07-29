import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Skill from './components/Skill/Skill';
import Branches from './components/Branches/Branches';
import Colors from './Colors';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Skill title="Hello world!" color={Colors.teal_dark}/>
      </div>
      <Branches branches={[
        {
          from: {
            position: 1/2,
            color: Colors.teal_dark
          },
          to: {
            position: 1/4,
            color: Colors.green_dark
          }
        },
        {
          from: {
            position: 1/2,
            color: Colors.teal_dark
          },
          to: {
            position: 3/4,
            color: Colors.purple_dark
          }
        }
      ]}/>
      <div className="container">
        <Skill title="Skill left" color={Colors.green_dark}/>
        <Skill title="Skill right" color={Colors.purple_dark}/>
      </div>
    </div>
  );
}

export default App;