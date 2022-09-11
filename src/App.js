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
          <div className='tenzies-number'>1</div>
          <div className='tenzies-number'>2</div>
          <div className='tenzies-number'>3</div>
          <div className='tenzies-number'>4</div>
          <div className='tenzies-number'>5</div>
          <div className='tenzies-number'>6</div>
          <div className='tenzies-number'>7</div>
          <div className='tenzies-number'>8</div>
          <div className='tenzies-number'>9</div>
          <div className='tenzies-number'>10</div>
        </div>
        <button className='tenzies-btn'>Roll</button>
      </div>
    </div>
    </main>
  );
}

export default App;
