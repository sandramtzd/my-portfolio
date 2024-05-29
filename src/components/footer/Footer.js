import React from 'react'
import {FooterContainer, Attribution} from './FooterStyle'
import Socials from '../socials/Socials';

const Footer = () => {
  return (
    <FooterContainer>
      <Socials isFooter={true} />

      <Attribution>
        <h2>Inspired by <a href='https://github.com/bchiang7/v4' target='_blank' rel="noreferrer">Brittany Chiang,</a></h2>
        <h3>
          <a href='https://github.com/chandrikadeb7' target='_blank' rel="noreferrer">Chandrika Deb </a>
          and
          <a href='https://github.com/rishavchanda/' target='_blank' rel="noreferrer"> Rishav Chanda</a>
        </h3>
        <h5>Adapted by
        <a href='https://github.com/sandramtzd' target='_blank' rel="noreferrer"> Sandra Martinez </a>
        and deployed by <a href='https://github.com/RNWalker' target='_blank' rel="noreferrer"> Rebecca Walker</a> </h5>
        
      </Attribution>
    </FooterContainer>
  )
}

export default Footer
