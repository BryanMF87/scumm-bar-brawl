import insultList from "./insultList";

const DialogueBox = ({turn, setTurn, setMessage}) => {

    let dialogue;
    let dialogueArray = [];

    const getDialogue = () => {
        // Get 4 random insults from insultList
        while(dialogueArray.length < 4) {
            let dialogueOption = insultList[Math.floor(Math.random() * insultList.length)];
            !dialogueArray.includes(dialogueOption) && dialogueArray.push(dialogueOption);
        }
    };

    const handleChoice = (event) => {
        // display message
        setMessage(event.target.innerHTML);       
    };


    const displayDialogue = () => {
        dialogue = dialogueArray.map(option =>
            turn === 0 
            ? <li key={option.insult} onClick={handleChoice}>{option.insult}</li>
            : <li key={option.response} onClick={handleChoice}>{option.response}</li>
        )
    };

    return (
        <div className='dialogue-box'>
            <ul className='dialogue-options'>
                {dialogue}
            </ul>
        </div>
    )
}

export default DialogueBox