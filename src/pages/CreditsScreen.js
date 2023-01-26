import logo from '../images/logo.png';

const CreditsScreen = ({setMenuScreen}) => {
  return (
    <div className="credits-screen">
        <div className='logo'>
            Scumm Bar Brawl
            <img src={logo} alt="Monkey Island 2: Lechuck's revenge"/>
        </div>
        <p>Development : Bryan Fink @ <a href='https://www.bryanfink.dev' target='_blank' rel="noopener">bryanfink.dev</a></p>
        <p>Animation : Gary Fink</p>
        <p>Imagery & music : <a href='https://www.scummbar.com' target='_blank' rel="noopener">scummbar.com</a></p>
        <h4>Thanks to Lucas Arts and all of the staff who worked on the Monkey Island series.</h4>
        <button onClick={() => setMenuScreen('')}>cool</button>
    </div>
  )
}

export default CreditsScreen
