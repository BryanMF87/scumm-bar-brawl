import useDialogue from "../hooks/useDialogue";

const DialogueBox = ({turn, setMessage}) => {

    const { dialogue } = useDialogue({turn, setMessage});

    return (
        <div className='dialogue-box'>
            <ul className='dialogue-options'>
                {dialogue}
            </ul>
        </div>
    )
}

export default DialogueBox