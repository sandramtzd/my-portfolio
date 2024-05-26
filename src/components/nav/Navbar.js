import React from 'react'
import Logo from '../../assets/Logo.svg'
import CV from '../../assets/Sandra_CV.pdf'
import { Nav, NavContainer, NavLogo, NavItems, MobileIcon, ButtonContainer, MobileMenu } from './NavStyle'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";



const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
 

  const closeMobileMenu = () => {
    setIsOpen(false);
    
  };

  React.useEffect (() => {
    const handleResize = () => {
      closeMobileMenu();
    };

    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu')) {
        closeMobileMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);
  
  return (
    <Nav>
      <NavContainer>
        <NavLogo>
          <a href='/'><img src={Logo} alt='hummingbird' style={{width: "70px"}}/></a>
        </NavLogo>

        <NavItems>  
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#experience'>Experience</a>
          <a href='#contact'>Contact</a>
        </NavItems>

        <ButtonContainer>
          <a href={CV} download className='btn' target='_blank' rel="noreferrer">Resume</a>
        </ButtonContainer>

          <div>
            <MobileIcon isOpen={isOpen} onClick={() => {setIsOpen(!isOpen)}}>
            {isOpen ? <AiOutlineClose /> : <HiMiniBars3BottomRight />}  </MobileIcon>

            <MobileMenu isOpen={isOpen} >
              <a href='#about' onClick={() => {setIsOpen(!isOpen);}} >About</a>
              <a href='#projects' onClick={() => {setIsOpen(!isOpen);}} >Projects</a>
              <a href='#experience' onClick={() => {setIsOpen(!isOpen);}} >Experience</a>
              <a href='#contact' onClick={() => {setIsOpen(!isOpen);}} >Contact</a>
              <a href={CV} download className='btn' target='_blank' rel="noreferrer">Resume</a>
            </MobileMenu>
          </div>
          
      </NavContainer>
    </Nav>

  )
}

export default Navbar


