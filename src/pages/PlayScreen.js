import { useState } from 'react';
// import components
import MenuScreen from './MenuScreen';
import IconMenu from '../components/IconMenu';
import TextBox from '../components/TextBox';
import DialogueBox from '../components/DialogueBox';

const PlayScreen = () => {

    const [menuScreen, setMenuScreen] = useState('');
    const [message, setMessage] = useState('');

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
                        message={message}
                    />
                    <div className='sprites'></div>
                </div>
                <DialogueBox
                    setMessage={setMessage}
                />
            </div>
        </div>
    )
}

export default PlayScreen;