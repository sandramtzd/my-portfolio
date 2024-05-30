import React from 'react'
import {SocialsContainer, SocialsFooterContainer} from './SocialsStyle.js'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Socials = ({ isFooter}) => {
  
  const SocialsComponent = isFooter ? SocialsFooterContainer : SocialsContainer;
  return (
    <SocialsComponent>
        <a href='https://www.linkedin.com/in/sandramtzd/' target='_blank' rel="noreferrer" ><FaLinkedinIn /></a>
        <a href='https://github.com/sandramtzd' target='_blank' rel="noreferrer" ><FaGithub /></a>
        <a href='https://medium.com/@sandramtzd' target='_blank' rel="noreferrer" ><FaMedium /></a>
    </SocialsComponent>
  )
}

export default Socials
