import React from 'react'

const QuitScreen = ({setMenuScreen}) => {
  return (
    <div className="quit-screen">
        <h1>Do you want to go back to the start menu?</h1>
        <div className='quit-buttons'>
            <button onClick={() => window.location.reload()}>Quit</button>
            <button onClick={() => setMenuScreen('')}>Cancel</button>
        </div>
    </div>
  )
}

export default QuitScreen