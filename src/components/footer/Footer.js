import React from 'react'
import {FooterContainer, Attribution} from './FooterStyle'

const Footer = () => {
  return (
    <FooterContainer>

      <Attribution>
        <a href='https://github.com/bchiang7/v4' target='_blank' rel="noreferrer">
        <h2>Inspired by Brittany Chiang</h2>
        </a>
        <a href='https://github.com/chandrikadeb7' target='_blank' rel="noreferrer">
        <h3>and Chandrika Deb</h3>
        </a>
        <a href='https://github.com/sandramtzd' target='_blank' rel="noreferrer">
        <h5>Adapted by Sandra Martinez</h5>
        </a>
      </Attribution>
    </FooterContainer>
  )
}

export default Footer
