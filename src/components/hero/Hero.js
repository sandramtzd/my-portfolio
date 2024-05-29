import React, {useEffect, useRef} from 'react'
import { Hero, HeroContainer, TextLoop, Greeting, Span, Name, Description, ButtonContact } from './HeroStyle'
import Typewriter from 'typewriter-effect';
import { bio } from '../../utils/data/constants';
import sr from '../../utils/Scroll';
import { srConfig } from '../../utils/ScrollConfig';

const Header = () => {

  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [] );
  

  

  return (
    <Hero>
      <HeroContainer id='home' ref={revealContainer}>
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
        <Description>{bio.description[0]}</Description>
        <Description>{bio.description[1]}</Description>
        <Description>{bio.description[2]}</Description>

        <ButtonContact>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </ButtonContact>
        

          

      </HeroContainer>
    </Hero>

  )
}

export default Header
