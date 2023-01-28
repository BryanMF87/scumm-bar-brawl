import { useState } from "react";
import useDialogue from "./useDialogue";

const useGameplay = () => {
    
    // const { getDialogue } = useDialogue();

    const [message, setMessage] = useState('');
    const [turn, setTurn] = useState(0);

    const openingSequence = () => {
        setMessage('Oh Jeez, not you again!')
        setTimeout(()=> {
            setTurn(1)
            setMessage('You were expecting someone else?')
        }, 2000);
        setTimeout(()=> {
            setTurn(0)
            // getDialogue()
        }, 4000);
    };

    return {
        message,
        setMessage,
        turn,
        setTurn,
        openingSequence
    }
}

export default useGameplay