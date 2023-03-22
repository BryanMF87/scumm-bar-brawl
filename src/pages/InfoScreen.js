import React from 'react'

const InfoScreen = ({setMenuScreen}) => {
  return (
    <div className='info-screen'>
        <h1>Insult sword fighting</h1>
        <p>The attacker chooses an insult to throw off their opponent when fighting.
        The defender can fight back by selecting an appropriate response. If the defender selects the right response they will get to launch their own attack.
        First to wins 3 rounds wins the game.</p>
        <button onClick={() => setMenuScreen('')}>got it!</button>
    </div>
  )
}

export default InfoScreen