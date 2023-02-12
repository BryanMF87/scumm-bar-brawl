import insultList from "../insultList";

const DialogueBox = ({playerTurn, setPlayerTurn, setMessage, currentInsult, setCurrentInsult, currentResponse, setCurrentResponse}) => {

    const handleClick = (e) => {
        setMessage(e.target.innerHTML);
        setCurrentInsult(e.target.innerHTML);
        setTimeout(()=> {
            setPlayerTurn(!playerTurn);
        }, 3000);
    };

    let dialogue;

    const getDialogue = () => {
        
        // Dialogue option values stored here to map later
        let dialogueArray = [];

        // Get 4 random insults if currentInsult is empty
        if (!currentInsult) {
            dialogueArray = insultList.sort(() => Math.random() - Math.random()).slice(0, 4);
            dialogue = dialogueArray.map(option =>
                <li key={option.insult} onClick={handleClick}>{option.insult}</li>
            );
        } 
        // If insult has value, get 3 random responses & 1 correct response
        else if (currentInsult && !currentResponse) {
            dialogueArray = insultList.sort(() => Math.random() - Math.random()).slice(0, 3);
        }
    };

    playerTurn && getDialogue();

    return (
        <div className='dialogue-box'>
            <ul className='dialogue-options'>
                {dialogue}
            </ul>
        </div>
    )
}

export default DialogueBox