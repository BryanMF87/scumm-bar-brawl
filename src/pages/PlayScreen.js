import { useState, useEffect } from 'react';
// import components
import MenuScreen from './MenuScreen';
import IconMenu from '../components/IconMenu';
import TextBox from '../components/TextBox/TextBox';
import DialogueBox from '../components/DialogueBox';
// import list arrays
import insultList from '../insultList';
import lameResponses from '../lameResponses';

const PlayScreen = () => {

    const [menuScreen, setMenuScreen] = useState('');
    const [message, setMessage] = useState('');
    const [playerTurn, setPlayerTurn] = useState(true);
    const [currentInsult, setCurrentInsult] = useState(null);
    const [currentResponse, setCurrentResponse] = useState(null);
    const [correctResponse, setCorrectResponse] = useState(null);

    let guybrushWinArray = [];
    let pirateWinArray = [];

    const getCorrectResponse = () => {
        // fires automatically when currentInsult has a value
        setCorrectResponse(insultList.find(item => item.insult === currentInsult).response);
    };

    const guybrushWinsGame = () => {
        console.log('Guybrush won the game');
    };

    const pirateWinsGame = () => {
        console.log('Pirate won the game');
    };

    const newRound = (outcome) => {
        console.log('Start a new round!');
        setCurrentInsult(null);
        setCurrentResponse(null);
        setCorrectResponse(null);
        setMessage('')

        setTimeout(()=> {
            setPlayerTurn(outcome);
        }, 1000)
    }

    const guybrushWinsRound = () => {
        console.log('guybrush won the round');
        guybrushWinArray.push('x');
        guybrushWinArray === ['x', 'x', 'x']
            ? guybrushWinsGame()
            : newRound('true');
    };

    const pirateWinsRound = () => {
        console.log('pirate won the round');
        pirateWinArray.push('x');
        pirateWinArray === ['x', 'x', 'x']
            ? pirateWinsGame()
            : newRound('false');
    };

    const checkRoundWinner = () => {
        console.log('checked round winner');

        currentResponse === correctResponse
            ? playerTurn && guybrushWinsRound()
            : !playerTurn && pirateWinsRound();

        currentResponse !== correctResponse
            ? playerTurn && pirateWinsRound()
            : !playerTurn && guybrushWinsRound();
    };

    const pirateInsult = () => {
        console.log('pirate insult')
        let pirateChoice = insultList[Math.floor(Math.random()*insultList.length)].insult;
        setMessage(pirateChoice);
        setCurrentInsult(pirateChoice);
        setTimeout(()=> {
            setPlayerTurn(!playerTurn)
        }, 3000);
    }

    const pirateRespond = () => {
        // Give pirate 50% chance of correct response
        let correct = Math.random() < 0.5;
        let outcome;

        correct
            // Correct response
            ? outcome = correctResponse
            // Wrong response
            : outcome = lameResponses[Math.floor(Math.random()*insultList.length)];

        setMessage(outcome);
        setCurrentResponse(outcome);

        setTimeout(()=> {
            checkRoundWinner();
        }, 2000);
    };

    const pirateActions = () => {
        !currentInsult
            ? pirateInsult()
            : pirateRespond()
    };

    useEffect(()=> {
        !playerTurn && pirateActions(); 
        console.log(playerTurn)
    }, [playerTurn]);
    


    const openingSequence = () => {
        setTimeout(()=> {
            setMessage('Oh Jeez, not you again!');
        }, 1000);

        setTimeout(()=> {
            setPlayerTurn('pirate');
            setMessage('You were expecting someone else?');
        }, 3500);

        setTimeout(()=> {
            setMessage('');
            setPlayerTurn(true);
        }, 5500);
    };



    // Automatically get the correct response to currentInsult
    useEffect(()=> {
        currentInsult && getCorrectResponse();
    }, [currentInsult]);

    // Play this first before gameplay starts
    // useEffect(()=> {
    //     // openingSequence();
    // }, []);,

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
                        playerTurn={playerTurn}
                        message={message}
                    />
                    <div className='sprites'></div>
                </div>
                <DialogueBox
                    playerTurn={playerTurn}
                    setPlayerTurn={setPlayerTurn}
                    setMessage={setMessage}
                    currentInsult={currentInsult}
                    setCurrentInsult={setCurrentInsult}
                    currentResponse={currentResponse}
                    setCurrentResponse={setCurrentResponse}
                />
            </div>
        </div>
    )
}

export default PlayScreen;