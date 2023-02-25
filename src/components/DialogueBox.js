
const DialogueBox = ({dialogue}) => {

    return (
        <div className='dialogue-box'>
            <ul className='dialogue-options'>
                {dialogue}
            </ul>
        </div>
    )
}

export default DialogueBox