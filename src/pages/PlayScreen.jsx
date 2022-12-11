import { useState } from 'react';
// import components
import MenuScreen from '../components/MenuScreen';
import IconMenu from '../components/IconMenu';
import Guy from '../components/Guy';
import LeChuck from '../components/LeChuck';
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
                    <div className='sprites'>
                        <Guy/>
                        <LeChuck/>
                    </div>
                </div>
                <DialogueBox
                    message={message}
                    setMessage={setMessage}
                />
            </div>
        </div>
    )
}

export default PlayScreen;