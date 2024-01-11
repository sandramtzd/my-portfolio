import React from 'react'
import {SocialsContainer} from './SocialsStyle.js'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Socials = () => {
  return (
    <SocialsContainer>
        <a href='https://www.linkedin.com/in/sandramtzd/' target='_blank' rel="noreferrer" ><FaLinkedinIn /></a>
        <a href='https://github.com/sandramtzd' target='_blank' rel="noreferrer" ><FaGithub /></a>
        <a href='https://medium.com/@sandramtzd' target='_blank' rel="noreferrer" ><FaMedium /></a>
    </SocialsContainer>
  )
}

export default Socials
