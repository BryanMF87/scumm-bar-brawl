import React, { useState } from 'react';
import './global.scss';
// import components
import StartScreen from './pages/StartScreen';
import PlayScreen from './pages/PlayScreen';

const App = () => {
  
  const [screen, setScreen] = useState('start');
  const [winner, setWinner] = useState(null);
  const [fade, setFade] = useState(false);

  return (
    <div className='content' style={{opacity: fade ? '0%' : '100%'}}>
      {screen === 'start' && <StartScreen setScreen={setScreen} fade={fade} setFade={setFade}/>}
      {screen === 'play' && <PlayScreen winner={winner} setFade={setFade} setWinner={setWinner} />}
    </div>
  );
}

export default App;