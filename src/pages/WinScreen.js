
const WinScreen = ({playerScore}) => {

    return (
      <div className="win-screen">
          <h1>Game over! {playerScore === 3 ? 'Guybrush won!' : 'Pirate won!'}</h1>
        <div className='quit-buttons'>
            <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      </div>
    )
  }
  
  export default WinScreen