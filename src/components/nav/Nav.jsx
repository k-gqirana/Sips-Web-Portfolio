import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiOutlineSetting} from 'react-icons/ai'
import {BiMessageRoundedDetail} from 'react-icons/bi'

const Nav = () => {
  const [activeNav, setActiveNav] = React.useState('#'); 

  return (
    <nav> 
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' && 'active' }> <AiOutlineHome /> </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' && 'active' }> <AiOutlineUser/> </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' && 'active' }> <BiBook /> </a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' && 'active' }> <AiOutlineSetting /> </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' && 'active' }> <BiMessageRoundedDetail /> </a>
    </nav>
  )
}

export default Nav