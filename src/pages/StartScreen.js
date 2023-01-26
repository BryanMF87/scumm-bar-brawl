// import assets
import logo from '../images/logo.png';

const StartScreen = ({onStartClick}) => {

    return (
        <div className='start-screen'>
            <div className='sidebar'>
                <div className='logo'>
                    Scumm Bar Brawl
                    <img src={logo} alt="Monkey Island 2: Lechuck's revenge"/>
                </div>
                <p>Monkey Island is a Lucas Arts trademark series. This is a fan made project. Please don't sue us.</p>
                <button onClick={ onStartClick }>Start game</button>
            </div>
        </div>
    )
}

export default StartScreen;