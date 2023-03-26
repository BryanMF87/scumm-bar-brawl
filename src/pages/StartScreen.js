import React from 'react';
// import assets
import logo from '../images/logo.png';

const StartScreen = ({setScreen, fade, setFade}) => {

    const sidebar = document.querySelector('.sidebar');

    const onStartClick = () => {
        setFade(true)
        setTimeout(()=>{
            setScreen('play')
        },3000)
    };

    return (
        <>
            <div className='start-screen'>
                <div className='sidebar' style={{opacity: fade ? '0%' : '100%'}}>
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