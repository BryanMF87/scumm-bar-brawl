import { useEffect, useState } from "react";
import useDialogue from "./useDialogue";

const useGameplay = () => {
    
    // const { getDialogue } = useDialogue();

    const [message, setMessage] = useState('');
    const [turn, setTurn] = useState(0);

    async function openingSequence {
        
    }

    openingSequence
        .then(() => {
            setTimeout(()=> {
                setMessage('Oh Jeez, not you again!')
            }, 1000)
        })
        .then(() => {
            setTimeout(()=> {
                setTurn(1)
                setMessage('You were expecting someone else?')
            }, 3000);
        })
        .then(() => {
            setTimeout(()=> {
                setMessage('')
                setTurn(0)
                // getDialogue()
            }, 3000);
        });

    return {
        message,
        setMessage,
        turn,
        setTurn,
        openingSequence
    }
}

export default useGameplay