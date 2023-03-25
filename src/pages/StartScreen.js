import React, {useRef} from 'react';
// import assets
import logo from '../images/logo.png';

const StartScreen = ({onStartClick}) => {

    const sidebarRef = useRef(null);

    return (
        <>
            <div className='start-screen'>
                <div className='sidebar' ref={sidebarRef}>
                    <div className='logo'>
                        <p>Scumm Bar Brawl</p>
                        <img src={logo} alt="The Secret of Monkey Island"/>
                    </div>
                    <div>
                        <button onClick={ onStartClick }>Start Game</button>
                        <p>Monkey Island is a Lucas Arts trademark series. This is just a fan-made game.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartScreen;