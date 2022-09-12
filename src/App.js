import react from 'react';
import React from 'react';
import { nanoid } from 'nanoid';
import ReactConfetti from 'react-confetti';
import Die from './components/Die'

import './styles.css'

function App() {

  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice(){
    const newDice = [];
    for (let i = 0; i < 10; i++){
      const randomNumber = Math.ceil(Math.random()*6);
      newDice.push({
        value: randomNumber,
        isHeld: true,
        id: nanoid(),
    })
    }
    return newDice
  }

  function holdDice(id){
    console.log("Unique: " + id)
  }


  const diceElements = dice.map((die) => <Die 
    key={die.id}
    id={die.id} 
    value={die.value} 
    isHeld={die.isHeld} 
    handleClick={holdDice}
    
  />)

  
  function rollDice(){
    setDice(allNewDice())
  }

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
        onClick={rollDice}
        >Roll</button>
      </div>
    </div>
    </main>
  );
}

export default App;
