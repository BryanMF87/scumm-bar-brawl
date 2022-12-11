import React, { useState } from "react";
// import songs
import openingTheme from '../music/opening-theme.mp3';
import scummBar from '../music/scumm-bar.mp3';
import lechucksTheme from '../music/lechucks-theme.mp3';
import monkeyIsland from '../music/monkey-island.mp3';

const MusicScreen = ({setMenuScreen}) => {

const [volume, setVolume] = useState(60);


  return (
    <div className='music-screen'>
        <h3>Music volume</h3>
        <input
            className='slider'
            type='range'
            min={0}
            max={100}
            step={1}
            value={volume}
            onChange={event => {
                setVolume(event.target.valueAsNumber)
            }}
        />
        <h3><label htmlFor='music'>Music selection</label></h3>
        <select name='music' className="music-selector">
            <option value='opening theme' 
                // onClick={() => playSong(openingTheme)}
                >
                Opening Theme
            </option>
            <option value='the scumm bar'
                // onClick={() => playSong(scummBar)}
                >
                The Scumm Bar
            </option>
            <option value='lechuck/s theme'
                // onClick={() => playSong(lechucksTheme)}
                >
                LeChuck's Theme
            </option>
            <option value='monkey island'
                // onClick={() => playSong(monkeyIsland)}
                >
                Monkey Island
            </option>
        </select>
        <button onClick={() => setMenuScreen('')}>Done</button>
    </div>
  )
}

export default MusicScreen