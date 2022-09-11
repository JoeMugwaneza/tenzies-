import React from 'react';
import ReactConfetti from 'react-confetti';
import Die from './components/Die'

import './styles.css'

function App() {
  return (
    <main>
    <div className='game-container'>
      <div className='inner-tenzies'>
        <h2 className='tenzies--title'>Tenzies</h2>
        <p className='tenzies--instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='tenzies-display'>
          <Die value="1" />
          <Die value="2" />
          <Die value="3" />
          <Die value="4" />
          <Die value="5" />
          <Die value="6" />
          <Die value="7" />
          <Die value="8" />
          <Die value="9" />
          <Die value="10" />
        </div>
        <button className='tenzies-btn'>Roll</button>
      </div>
    </div>
    </main>
  );
}

export default App;
