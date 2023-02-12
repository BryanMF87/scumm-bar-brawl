const TextBox = ({playerTurn, message}) => {
  
let speaker;

playerTurn
  ? speaker = 'text-box guybrush'
  : speaker = 'text-box pirate';

  return (
    <>
      <div className={speaker}>{message}</div>
    </>
  )
}

export default TextBox