import React, { useState } from 'react';
import './global.scss';
// import components
import StartScreen from './pages/StartScreen';
import PlayScreen from './pages/PlayScreen';
import SubScreen from './pages/MenuScreen';


const App = () => {
  
  const [screen, setScreen] = useState('start');

  return (
    <>
      <div className='content'>
        <SubScreen />
        {screen === 'start' && (<StartScreen 
          onStartClick={() => setScreen('play')}
        />)}
        {screen === 'play' && <PlayScreen/>}
      </div>
    </>
  );
}

export default App;


