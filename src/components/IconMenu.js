
import { FaHome, FaQuestion, FaCog } from 'react-icons/fa';

const IconMenu = ({setMenuScreen}) => {

  return (
    <ul className='icon-menu'>
        <li onClick={() => setMenuScreen('quit')}><FaHome/></li>
        <li onClick={() => setMenuScreen('info')}><FaQuestion/></li>
        <li onClick={() => setMenuScreen('credits')}><FaCog/></li>
    </ul>
  )
}

export default IconMenu