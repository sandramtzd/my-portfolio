import React from 'react'
import './nav.css'
import Logo from '../../assets/Logo.png'

const Nav = () => {
  return (
    <nav>
      <div className='logo'>
        <img src={Logo} alt='hummingbird'/>
      </div>
      <a href='#about'>About</a>
      <a href='#projects'>Projects</a>
      <a href='#experience'>Experience</a>
      <a href='#contact'>Contact</a>

    </nav>

  )
}

export default Nav
