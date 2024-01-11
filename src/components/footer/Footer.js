import React from 'react'
import {FooterContainer, Attribution} from './FooterStyle'

const Footer = () => {
  return (
    <FooterContainer>

      <Attribution>
        <h2>Inspired by <a href='https://github.com/bchiang7/v4' target='_blank' rel="noreferrer">Brittany Chiang,</a></h2>
        <h3>
          <a href='https://github.com/chandrikadeb7' target='_blank' rel="noreferrer">Chandrika Deb ß</a>
          and
          <a href='https://github.com/rishavchanda/' target='_blank' rel="noreferrer"> Rishav Chanda</a>
        </h3>
        <h5>Adapted by
        <a href='https://github.com/sandramtzd' target='_blank' rel="noreferrer"> Sandra Martinez</a>
        </h5>
      </Attribution>
    </FooterContainer>
  )
}

export default Footer
