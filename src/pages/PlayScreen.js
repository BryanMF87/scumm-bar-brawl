import { useState, useEffect } from 'react';
// import components
import MenuScreen from './MenuScreen';
import IconMenu from '../components/IconMenu';
import TextBox from '../components/TextBox/TextBox';
import DialogueBox from '../components/DialogueBox';

// import list arrays
import insultList from '../insultList';
import lameResponses from '../lameResponses';

const wait = ms => {
   return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

const PlayScreen = () => {

    const [menuScreen, setMenuScreen] = useState('');
    const [message, setMessage] = useState('');
    const [playerTurn, setPlayerTurn] = useState(true);
    const [currentInsult, setCurrentInsult] = useState(null);
    const [currentResponse, setCurrentResponse] = useState(null);
    const [correctResponse, setCorrectResponse] = useState(null);
    const [dialogue, setDialogue] = useState([]);
    const [playerScore, setPlayerScore] = useState(0);
    const [opponentScore, setOpponentScore] = useState(0);
    const [winner, setWinner] = useState(null);

 


    // const openingSequence = async () => {
    //     setMessage('Oh jeez, not you again!');
    //     // guybrushTalks('oh jeez, not you again!')
    //     await wait(1000)

    //     setPlayerTurn('pirate');
    //     setMessage('You were expecting someone else?');
    //     // pirateTalks('You were expecting someone else?')
    //     await wait(3500)

    //     setMessage('');
    //     setPlayerTurn(true);
    //     await wait(2000);  
    // };

    let gameStart = true;

    useEffect(()=> {
        if(playerTurn === true) {
            playerAction()
        } else if (playerTurn === null) {
            return
        } else if (playerTurn === false) {
            opponentAction()
        }
    }, [playerTurn]);

    // I only need to add a player switch after insult & delay
    // response should handle itself

    const playerAction = () => {
        let dialogueArray = [];
        let dialogueOptions;

        console.log('player action');

        // Player attacks
        if(!currentInsult) { 
            console.log('player attacks');
            dialogueArray = insultList.sort(() => Math.random() - Math.random()).slice(0, 4);
            dialogueOptions = dialogueArray.map((option) => {
                return <li key={option.insult} onClick={handleClick}>{option.insult}</li>;  
            }); 

        // Player defends
        } else if(!currentResponse) { 
            console.log('player defends');
            dialogueArray.push(correctResponse);

           for(let i = 0; dialogueArray.length < 4; i++) {
                let wrongResponse = insultList[Math.floor(Math.random()*insultList.length)].response;
                if(wrongResponse !== correctResponse) {
                    dialogueArray.push(wrongResponse);
                }
                console.log(wrongResponse);
            };

            console.log(dialogueArray);

            dialogueArray.sort();
            dialogueOptions = dialogueArray.map((option) => {
                return <li key={option} onClick={handleClick}>{option}</li>;  
            }); 
        }
        setDialogue(dialogueOptions);
    };

    const handleClick = async (e) => {
        console.log('player says ' + e.target.innerHTML)
        setDialogue([])
        setMessage(e.target.innerHTML);
        currentInsult
            ? setCurrentResponse(e.target.innerHTML)
            : setCurrentInsult(e.target.innerHTML)
    };

    const opponentAction = () => {

        console.log('opponent action')

        // Opponent attacks
        if(!currentInsult) { 
            console.log('opponent attacks')
            let opponentChoice = insultList[Math.floor(Math.random()*insultList.length)].insult;
            setMessage(opponentChoice);
            setCurrentInsult(opponentChoice);

        // Opponent Defends
        } else if(!currentResponse) {
            console.log('opponent defends')
            // Give opponent 50% chance of correct response
            let opponentResponse = Math.random() < 0.5;
            opponentResponse
                ? opponentResponse = correctResponse
                : opponentResponse = lameResponses[Math.floor(Math.random() * lameResponses.length)];
            console.log(`opponent's response is ` + opponentResponse);
            setMessage(opponentResponse);
            setCurrentResponse(opponentResponse);
        }
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
        console.log('currentInsult is ' + currentInsult)
    }, [currentInsult]);


    // Find round / game winner
    useEffect(()=> {
        if (currentResponse) {
            setTimeout(()=>{
                console.log('checking for winner')
                // Player wins if they guess correct or pirate guesses wrong
                if (currentResponse === correctResponse && playerTurn === true
                    || currentResponse !== correctResponse && playerTurn === false) {
                        setWinner(true);
                        setPlayerScore(playerScore + 1);

                } else {  // else pirate wins
                    setWinner(false);
                    setOpponentScore(opponentScore + 1); 
                }
            }, 2500);
        };
        console.log('currentResponse is ' + currentResponse)
    }, [currentResponse]);


    useEffect(()=> {
        console.log('player score is ' + playerScore);
        console.log('opponent score is ' + opponentScore);

        if(playerScore > 0 || opponentScore > 0) {
            if(playerScore === 3) {
                console.log('Player wins')
            } else if (opponentScore === 3) {
                console.log('Opponent wins')
            } else {
                newRound();
            };
        }

    }, [playerScore, opponentScore]);

    
    const newRound = async () => {
        console.log('Start a new round!');
        setCurrentInsult(null);
        setCurrentResponse(null);
        setCorrectResponse(null);
        setMessage('');
        setWinner(null);

        // Helps newRound start if defender and round winner are same person
        setPlayerTurn(null);
        await wait(100);
        setPlayerTurn(winner);
        setWinner(null);
    };


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