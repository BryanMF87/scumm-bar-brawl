import guyStatic from '../images/guy-static.png';

const Guy = () => {

  const guybrushDialogue = [
    'Oh hey there!',
    'I hope you’re enjoying the game.',
    'And this little easter egg I added.',
    'We should probably get back to LeChuck now..',
    'I’m sensing a pattern here...',
    'OK. stop it.',
    'A man can only take so much!',
    'Kaaa-meee-haaa-meeeee..',
    'Yeah, I didn’t think that would work.',
    'You don’t have enough badges to train me.',
    'I would literally rather deal with the undead pirate zombie instead of you.',
  ]

  const talkGuybrush = () => {
    
  }

  return (
    <img src={guyStatic} onClick={talkGuybrush}/>
  )
}

export default Guy