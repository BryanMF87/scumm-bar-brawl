import React from 'react';
import QuitScreen from './QuitScreen';
import CreditsScreen from './CreditsScreen';
import WinScreen from './WinScreen';

const MenuScreen = ({menuScreen, setMenuScreen, winner}) => {

  return (
    <div>
        {menuScreen === 'quit' && <QuitScreen setMenuScreen={setMenuScreen}/>}

        {menuScreen === 'credits' && <CreditsScreen setMenuScreen={setMenuScreen}/>}

        {menuScreen === 'win' && <WinScreen winner={winner}/>}
    </div>
  )
}

export default MenuScreen