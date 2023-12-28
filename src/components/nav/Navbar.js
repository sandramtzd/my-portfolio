import React from 'react'
import Logo from '../../assets/Logo.png'
import CV from '../../assets/Sandra_CV.pdf'
import {Nav, NavContainer, NavLogo, NavItems, NavLink } from './NavStyle'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';


const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo>
        <img src={Logo} alt='hummingbird'/>
        </NavLogo>

        <NavItems>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavItems>


      </NavContainer>
    </Nav>

  )
}

export default Navbar

// //         <NavItems>
// <a href='#about'>About</a>
// <a href='#projects'>Projects</a>
// <a href='#experience'>Experience</a>
// <a href='#contact'>Contact</a>
// </NavItems>

// <ButtonContainer>
// <a href={CV} download className='btn'>Download CV</a>
// </ButtonContainer>