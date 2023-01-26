import React from 'react';
import QuitScreen from './QuitScreen';
import MusicScreen from './MusicScreen';
import CreditsScreen from './CreditsScreen';

const MenuScreen = ({menuScreen, setMenuScreen}) => {

  return (
    <div>
        {menuScreen === 'quit' && <QuitScreen setMenuScreen={setMenuScreen}/>}

        {menuScreen === 'music' && <MusicScreen setMenuScreen={setMenuScreen}/>}

        {menuScreen === 'credits' && <CreditsScreen setMenuScreen={setMenuScreen}/>}
    </div>
  )
}

export default MenuScreen