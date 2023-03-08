import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {SiIndeed} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="__blank"> <BsLinkedin /></a>
        <a href='https://za.indeed.com/'><SiIndeed /></a>
    </div>
  )
}

export default HeaderSocials