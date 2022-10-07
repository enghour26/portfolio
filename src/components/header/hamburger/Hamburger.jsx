import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaTimes} from 'react-icons/fa'
const Hamburger = () => {
    const [toggle, setToggle] = React.useState(false)

  return (
    <div className='hamburger'>
        <GiHamburgerMenu onClick={() => setToggle ? 'hideMenu, showMenu' : 'showMenu'}/>
        <FaTimes onClick={() => toggle === !toggle}/>
    </div>
  )
}

export default Hamburger