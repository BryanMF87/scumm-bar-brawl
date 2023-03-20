import React, { useState } from 'react';
import './global.scss';
// import components
import StartScreen from './pages/StartScreen';
import PlayScreen from './pages/PlayScreen';
import MenuScreen from './pages/MenuScreen';

const App = () => {
  
  const [screen, setScreen] = useState('start');
  const [winner, setWinner] = useState(null);

  return (
    <>
      <div className='content'>
        <MenuScreen 
          winner={winner}
        />
        {screen === 'start' && (<StartScreen 
          onStartClick={() => setScreen('play')}
        />)}
        {screen === 'play' && <PlayScreen
          winner={winner}
          setWinner={setWinner}
        />}
      </div>
    </>
  );
}

export default App;


