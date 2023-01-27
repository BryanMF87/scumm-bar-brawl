const TextBox = ({turn, message}) => {
  
let speaker;

turn === 0 
  ? speaker = 'text-box guybrush'
  : speaker = 'text-box pirate';

  return (
    <>
      <div className={speaker}>{message}</div>
    </>
  )
}

export default TextBox