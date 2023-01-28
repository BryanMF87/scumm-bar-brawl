import insultList from "../components/insultList";
import responseList from "../components/responseList";

const useDialogue = ({turn, setMessage}) => {

    let dialogue;
    let dialogueArray = [];

    const getInsults = () => {
        insultList.sort()
        dialogue = insultList.slice(0, 4)
    };

    const getResponses = () => {
        responseList.sort()
        dialogue = responseList.slice(0, 4)
    };

    const getDialogue = () => {
        // Get 4 random insults from insultList
        turn === 0
            ? getInsults()
            : getResponses()
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
    dialogue,
    dialogueArray,
    getDialogue,
    displayDialogue
  )
}

export default useDialogue