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
    const [dialogue, setDialogue] = useState([]);


    const wait = ms => 
        new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, ms);
        });

    // Sequences

    const openingSequence = async () => {
        setMessage('Oh jeez, not you again!');
        // guybrushTalks('oh jeez, not you again!')
        await wait(1000)

        setPlayerTurn('pirate');
        setMessage('You were expecting someone else?');
        // pirateTalks('You were expecting someone else?')
        await wait(3500)

        setMessage('');
        setPlayerTurn(true);
        await wait(2000);

        battleSequence();
    };

    
    const battleSequence = async () => {
        playerTurn
            ? guybrushInsults()
            : pirateInsults();
        await wait(2500);

        playerTurn
            ? guybrushResponds()
            : pirateResponds();
        await wait(4500)

        playerTurn === 0 && currentResponse === correctResponse 
        || playerTurn === 1 && currentResponse !== correctResponse
            ? guybrushWinsRound()
            : pirateWinsRound();
        await wait(500)

        guybrushScore === 3 
            ? guybrushWinsGame()
            : pirateScore === 3 
                ? pirateWinsGame()
                : newRound();
    };


    // Game functions

    const newRound = (outcome) => {
        console.log('Start a new round!');
        setCurrentInsult(null);
        setCurrentResponse(null);
        setCorrectResponse(null);
        setMessage('')
        setPlayerTurn(outcome);
        console.log(`player turn is ${playerTurn}`)
    };

    const checkRoundWinner = () => {
        console.log('checked round winner');

            playerTurn 
                ? currentResponse === correctResponse 
                    && guybrushWinsRound()
                : currentResponse !== correctResponse
                    && pirateWinsRound();

            !playerTurn 
                ? currentResponse === correctResponse
                    && pirateWinsRound()
                : currentResponse !== correctResponse
                    && guybrushWinsRound()
    };

    const handleClick = (e) => {
        setDialogue([])
        setMessage(e.target.innerHTML);
        setCurrentInsult(e.target.innerHTML);
        setTimeout(()=> {
            setPlayerTurn(!playerTurn);
        }, 3000);
    };



    // Guybrush Threepwood

    const [guybrushScore, setGuybrushScore] = useState(0);

    const guybrushWinsGame = () => {
        console.log('Guybrush won the game');
    };

    const guybrushWinsRound = () => {
        console.log('guybrush won the round');
        setGuybrushScore(guybrushScore + 1);
        guybrushScore === 3
            ? guybrushWinsGame()
            : newRound(true);
    };

    const guybrushInsults = () => {
        console.log('guybrush insults');
        const insultArray = insultList.sort(() => Math.random() - Math.random()).slice(0, 4);
        let insultOptions = insultArray.map((option) => {
            return <li key={option.insult} onClick={handleClick}>{option.insult}</li>;  
        }); 
        setDialogue(insultOptions);
    };

    const guybrushResponds = () => {
        let responseArray = [];
        console.log('guybrush responds');
        // If insult has value, get 3 random responses & 1 correct response
        responseArray = insultList.sort(() => Math.random() - Math.random()).slice(0, 3);
    };


    
    // pirate

    const [pirateScore, setPirateScore] = useState(0);

    const pirateWinsGame = () => {
        console.log('Pirate won the game');
    };

    const pirateWinsRound = () => {
        console.log('pirate won the round');
        setPirateScore(pirateScore + 1);
        pirateScore === 3
            ? pirateWinsGame()
            : newRound(false);
    };

    const pirateInsults = () => {
        console.log('pirate insults')
        let pirateChoice = insultList[Math.floor(Math.random()*insultList.length)].insult;
        console.log(pirateChoice)
        setMessage(pirateChoice);
        setCurrentInsult(pirateChoice);
        setTimeout(()=> {
            setPlayerTurn(!playerTurn)
        }, 3000);
    }

    const pirateResponds = async () => {
        console.log('pirate responds')
        // Give pirate 50% chance of correct response

        let pirateResponse = Math.random() < 0.5;

        console.log(`pirate's inital response parameter is ${pirateResponse}`);
    
        pirateResponse
            ? pirateResponse = correctResponse
            : pirateResponse = lameResponses.sort[0];


        console.log(`pirate's response is ` + pirateResponse);
        
        setMessage(pirateResponse);
        setCurrentResponse(pirateResponse);

        setTimeout(()=> {
            checkRoundWinner();
        }, 2000);
    };



    // helper functions

    

    const getCorrectResponse = () => {
        setCorrectResponse(insultList.find(item => item.insult === currentInsult).response);
    };

    useEffect(()=> {
        currentInsult && getCorrectResponse();
    }, [currentInsult]);

    // Play this first before gameplay starts
    useEffect(()=> {
        // openingSequence();
        battleSequence();
    }, []);

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
                    dialogue={dialogue}
                />
            </div>
        </div>
    )
}

export default PlayScreen