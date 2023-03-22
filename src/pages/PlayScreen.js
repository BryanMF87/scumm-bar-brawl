import { useState, useEffect } from 'react';
// import components
import MenuScreen from './MenuScreen';
import IconMenu from '../components/IconMenu';
import TextBox from '../components/TextBox';
import DialogueBox from '../components/DialogueBox';
// import list arrays
import insultList from '../insultList';
import lameResponses from '../lameResponses';
// import assets
import spritesStatic from '../images/sprites_static.png';
import guybrushTalk from '../images/guybrush-talk.gif';
import pirateTalk from '../images/pirate-talk.gif';
import spritesFighting from '../images/sword-fighting.gif';


export const wait = ms => {
   return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

const PlayScreen = ({winner, setWinner}) => {

    const [gameStart, setGameStart] = useState(false);
    const [message, setMessage] = useState('');
    const [playerTurn, setPlayerTurn] = useState(true);
    const [currentInsult, setCurrentInsult] = useState(null);
    const [currentResponse, setCurrentResponse] = useState(null);
    const [correctResponse, setCorrectResponse] = useState(null);
    const [dialogue, setDialogue] = useState([]);
    const [playerScore, setPlayerScore] = useState(0);
    const [opponentScore, setOpponentScore] = useState(0);
    const [animation, setAnimation] = useState(null);
    const [menuScreen, setMenuScreen] = useState('');


    const openingSequence = async () => {
        setMessage('Oh jeez, not you again!');
        setAnimation(guybrushTalk);
        await wait(2500)

        setAnimation(spritesStatic);
        setPlayerTurn(false);
        setMessage('You were expecting someone else?');
        setAnimation(pirateTalk);
        await wait(2500)

        setAnimation(spritesStatic);
        setMessage('');
        setGameStart(true);
        await wait(100);

        setPlayerTurn(true);
    };




    useEffect(()=> {
        if(gameStart) {
            if(playerTurn === true) {
                playerAction()
            } else if (playerTurn === null) {
                return
            } else if (playerTurn === false) {
                opponentAction()
            }
        };
    }, [playerTurn]);




    const playerAction = () => {
        let dialogueArray = [];
        let dialogueOptions;

        // Player attacks
        if(!currentInsult) { 
            dialogueArray = insultList.sort(() => Math.random() - Math.random()).slice(0, 4);
            dialogueOptions = dialogueArray.map((option) => {
                return <li key={option.insult} onClick={handleClick}>{option.insult}</li>;  
            }); 

        // Player defends
        } else if(!currentResponse) { 
            dialogueArray.push(correctResponse);

           for(let i = 0; dialogueArray.length < 4; i++) {
                let wrongResponse = insultList[Math.floor(Math.random()*insultList.length)].response;
                if(wrongResponse != correctResponse) {
                    dialogueArray.push(wrongResponse);
                };
            };

            dialogueArray.sort();
            dialogueOptions = dialogueArray.map((option) => {
                return <li key={option} onClick={handleClick}>{option}</li>;  
            }); 
        }
        setDialogue(dialogueOptions);
    };



    const handleClick = async (e) => {
        setDialogue([])
        setMessage(e.target.innerHTML);
        currentInsult
            ? setCurrentResponse(e.target.innerHTML)
            : setCurrentInsult(e.target.innerHTML)
        setAnimation(guybrushTalk);
        await wait(2500);
        setAnimation(spritesStatic);
    };




    const opponentAction = async () => {

        // Opponent attacks
        if(!currentInsult) { 
            let opponentChoice = insultList[Math.floor(Math.random()*insultList.length)].insult;
            setMessage(opponentChoice);
            setCurrentInsult(opponentChoice);

        // Opponent Defends
        } else if(!currentResponse) {
            // Give opponent 50% chance of correct response
            let opponentResponse = Math.random() < 0.5;
            opponentResponse
                ? opponentResponse = correctResponse
                : opponentResponse = lameResponses[Math.floor(Math.random() * lameResponses.length)];
            setMessage(opponentResponse);
            setCurrentResponse(opponentResponse);
        }

        setAnimation(pirateTalk);
        await wait(2500);
        setAnimation(spritesStatic);
    };



    // Automatically get correct response for future response comparison
    useEffect(()=> {
        if(currentInsult) {
            setCorrectResponse(insultList.find(item => item.insult === currentInsult).response);
            setTimeout(()=>{
                setMessage('');
                setPlayerTurn(!playerTurn);
            }, 2500);
        };
    }, [currentInsult]);




    // Find round / game winner
    useEffect(()=> {
        if (currentResponse) {
            setTimeout(()=> {
                setAnimation(spritesFighting);
            }, 2500);
    
            setTimeout(()=> {
                setAnimation(spritesStatic);
                // Player wins if they guess correct or pirate guesses wrong
                if (currentResponse === correctResponse && playerTurn === true
                    || currentResponse !== correctResponse && playerTurn === false) {
                        setWinner(true);
                        setPlayerScore(playerScore + 1);
    
                } else {  // else pirate wins
                    setWinner(false);
                    setOpponentScore(opponentScore + 1); 
                }
            }, 5000);
        }
    }, [currentResponse]);




    useEffect(()=> {
        if(playerScore > 0 || opponentScore > 0) {
            if(playerScore === 3) {
                setMenuScreen('win')
            } else if (opponentScore === 3) {
                setMenuScreen('win')
            } else {
                newRound();
            };
        }
    }, [playerScore, opponentScore]);

    


    const newRound = async () => {
        setCurrentInsult(null);
        setCurrentResponse(null);
        setCorrectResponse(null);
        setMessage('');

        // Helps newRound start if defender and round winner are same person
        setPlayerTurn(null);
        await wait(100);
        setPlayerTurn(winner);
        setWinner(null);
    };



    useEffect(()=> {
        openingSequence();
    }, []);


    return (
        <div>
            <MenuScreen 
                menuScreen={menuScreen} 
                setMenuScreen={setMenuScreen}
                playerScore={playerScore}
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
                    <img
                        src={animation}
                        alt='Guybrush and pirate sprites'
                    />
                </div>
                <DialogueBox
                    dialogue={dialogue}
                />
            </div>
        </div>
    )
}

export default PlayScreen