import React from 'react';
import QuitScreen from './QuitScreen';
import CreditsScreen from './CreditsScreen';
import WinScreen from './WinScreen';
import InfoScreen from './InfoScreen';
import ErrorScreen from './ErrorScreen';

const MenuScreen = ({menuScreen, setMenuScreen, playerScore}) => {

  return (
    <div>
        {menuScreen === 'quit' && <QuitScreen setMenuScreen={setMenuScreen}/>}

        {menuScreen === 'credits' && <CreditsScreen setMenuScreen={setMenuScreen}/>}

        {menuScreen === 'win' && <WinScreen playerScore={playerScore}/>}

        {menuScreen === 'info' && <InfoScreen setMenuScreen={setMenuScreen}/>}

        {menuScreen === 'error' && <ErrorScreen />}
    </div>
  )
}

export default MenuScreen