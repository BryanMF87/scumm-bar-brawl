// import insultOptions from '../../insultOptions';

const DialogueBox = () => {

    return (
        <div className='dialogue-box'>
            <p>Insult LeChuck</p>
            <ul className='insult-options'>
                <li>Look behind you, a three-headed monkey!</li>
                <li>I... am your brother!</li>
                <li>There are no words for how disgusting you are.</li>
                <li>I’ve spoken with apes more polite than you!</li>
            </ul>
        </div>
    )

    // let randomInsult = insultOptions[Math.floor(Math.random() * insultOptions.length)]
    // console.log(randomInsult);

    // let randomRetort = randomInsult.retort[Math.floor(Math.random() * randomInsult.retort.length)]
    // console.log(randomRetort)
}

export default DialogueBox