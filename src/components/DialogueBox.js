import insultList from "./insultList";

const DialogueBox = ({setMessage}) => {

     
    let turn = 0;

    const handleChoice = (event) => {
        // display message
        setMessage(event.target.innerHTML);
    }

    let dialogue;

    const getDialogue = () => {
        if (turn === 0) { // Guybrush's turn, fetch 
            let randomInsultArr = [];
            // Get 4 random insults from insultList
            while(randomInsultArr.length < 4) {
                let randomInsult = insultList[Math.floor(Math.random() * insultList.length)];
                !randomInsultArr.includes(randomInsult) && randomInsultArr.push(randomInsult);
            }
            
            dialogue = randomInsultArr.map(option => 
                <li key={option.insult} onClick={handleChoice}>{option.insult}</li>
            )
        } 
        else if (turn === 1) { // Pirate's turn, fetch responses
            let randomResponseArr = [];
            // Get 4 random responses from insultList
            while(randomResponseArr.length < 4) {
                let randomResponse = insultList[Math.floor(Math.random() * insultList.length)];
                !randomResponseArr.includes(randomResponse) && randomResponseArr.push(randomResponse);
            }
            
            dialogue = randomResponseArr.map(option => 
                <li key={option.response}>{option.response}</li>
            )
        }
    };

    getDialogue()

    console.log(dialogue)

    return (
        <div className='dialogue-box'>
            <ul className='dialogue-options'>
                {dialogue}
            </ul>
        </div>
    )
}

export default DialogueBox