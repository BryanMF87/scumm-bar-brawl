import React, { useState, useEffect } from 'react';
import './global.scss';
// import components
import StartScreen from './pages/StartScreen';
import PlayScreen from './pages/PlayScreen';
import MenuScreen from './pages/MenuScreen';

const App = () => {
  
  const [screen, setScreen] = useState('start');
  const [menuScreen, setMenuScreen] = useState('');
  const [winner, setWinner] = useState(null);
    

  useEffect(()=> {
    if(window.outerHeight > window.outerWidth) {
      setMenuScreen('error')
    }
  }, []);

    window.addEventListener('resize', ()=> {
      if(window.outerHeight > window.outerWidth) {
        setMenuScreen('error')
      } else {
        setMenuScreen('')
      };
    });

  return (
    <>
      <MenuScreen 
        menuScreen={menuScreen} 
        setMenuScreen={setMenuScreen}
      />
      <div className='content'>
        {screen === 'start' && <StartScreen onStartClick={() => setScreen('play')} />}
        {screen === 'play' && <PlayScreen winner={winner} setWinner={setWinner} menuScreen={menuScreen} setMenuScreen={setMenuScreen}/>}
      </div>
    </>
  );
}

export default App;


