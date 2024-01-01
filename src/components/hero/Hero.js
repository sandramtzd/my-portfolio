import React from 'react'
import { Hero, HeroContainer, TextLoop, Greeting, Span, Name, Description, ButtonContact } from './HeroStyle'
import Typewriter from 'typewriter-effect';
import { bio } from '../../data/constants';

const Header = () => {
  return (
    <Hero>
      <HeroContainer>
        <Greeting>Hello World! My name is</Greeting>
        <Name>{bio.name}</Name>
        <TextLoop>
          I am
          <Span>
            <Typewriter 
            options={{
              strings: bio.roles,
              autoStart: true,
              loop: true,
            }}/>
          </Span>
        </TextLoop>
        <Description>{bio.description}</Description>
        <ButtonContact>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </ButtonContact>
          

      </HeroContainer>
    </Hero>

  )
}

export default Header
