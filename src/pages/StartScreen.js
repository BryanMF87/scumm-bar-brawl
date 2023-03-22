import React, {useRef} from 'react';
// import assets
import logo from '../images/logo.png';

const StartScreen = ({onStartClick}) => {

    const sidebarRef = useRef(null);

    return (
        <div className='start-screen'>
            <div className='sidebar' ref={sidebarRef}>
                <div className='logo'>
                    Scumm Bar Brawl
                    <img src={logo} alt="The Secret of Monkey Island"/>
                </div>
                <div className="button-n-text">
                    <button onClick={ onStartClick }>Start game</button>
                    <p>Monkey Island is a trademarked product, this is just a fan-made game. Please don't sue us.</p>
                </div>
            </div>
        </div>
    )
}

export default StartScreen;