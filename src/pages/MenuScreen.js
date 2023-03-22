import React from 'react';
import QuitScreen from './QuitScreen';
import CreditsScreen from './CreditsScreen';
import WinScreen from './WinScreen';
import InfoScreen from './InfoScreen';

const MenuScreen = ({menuScreen, setMenuScreen, playerScore}) => {

  return (
    <div>
        {menuScreen === 'quit' && <QuitScreen setMenuScreen={setMenuScreen}/>}

        {menuScreen === 'credits' && <CreditsScreen setMenuScreen={setMenuScreen}/>}

        {menuScreen === 'win' && <WinScreen playerScore={playerScore}/>}

        {menuScreen === 'info' && <InfoScreen setMenuScreen={setMenuScreen}/>}
    </div>
  )
}

export default MenuScreen