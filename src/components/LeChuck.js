import leChuckStatic from '../images/lechuck-static.png';

const LeChuck = () => {

  const lechuckDialogue = [
    'Don’t touch me.',
    'I will round house kick you in the face.',
    'You’re invading my personal space.',
    'No means no.',
    'I bet Hook doesn’t get this kind of disrespect..',
    'I hate you so much.',
    'I’m an evil undead pirate zombie, but I think we both know you’re the real monster here.',
    '*You must construct additional pylons!*',
    'Shoo fly, don’t bother me.',
    'Seriously, go bother someone else.',
  ]

  return (
    <img src={leChuckStatic}/>
  )
}

export default LeChuck