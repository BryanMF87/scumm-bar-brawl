import { useState } from 'react';
// import components
import MenuScreen from './MenuScreen';
import IconMenu from '../components/IconMenu';
import TextBox from '../components/TextBox';
import DialogueBox from '../components/DialogueBox';
import useGamePlay from '../hooks/useGamePlay';

const PlayScreen = () => {

    const [menuScreen, setMenuScreen] = useState('');
    const {turn, message, setMessage} = useGamePlay();

    return (
        <div>
            <MenuScreen 
                menuScreen={menuScreen} 
                setMenuScreen={setMenuScreen}
            />
            <IconMenu 
                menuScreen={menuScreen} 
                setMenuScreen={setMenuScreen}
            />
            <div className='wrapper'>
                <div className='character-section'>
                    <TextBox
                        turn={turn}
                        message={message}
                    />
                    <div className='sprites'></div>
                </div>
                <DialogueBox
                    turn={turn}
                    setMessage={setMessage}
                />
            </div>
        </div>
    )
}

export default PlayScreen;