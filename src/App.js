import React from 'react';
import ReactConfetti from 'react-confetti';
import Die from './components/Die'

import './styles.css'

function App() {

  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice(){
    const newDice = []
    for (let i = 0; i < 10; i++){
      newDice.push(Math.ceil(Math.random()*6))
    }
    return newDice
  }

  const diceElements = dice.map((die, index) => <Die key={index} value={die} />)
  
  return (
    <main>
    <div className='game-container'>
      <div className='inner-tenzies'>
        <h2 className='tenzies--title'>Tenzies</h2>
        <p className='tenzies--instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='tenzies-display'>
          {diceElements}
        </div>
        <button className='tenzies-btn'
        onClick={allNewDice}
        >Roll</button>
      </div>
    </div>
    </main>
  );
}

export default App;
