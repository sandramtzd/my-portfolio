import React, {useEffect, useRef} from 'react'
import { AboutContainer, Heading, FlexContainer, AboutContent, Picture, Avatar, AvatarLink } from './AboutStyle'
import { bio } from '../../utils/data/constants';
import sr from '../../utils/Scroll';
import { srConfig } from '../../utils/ScrollConfig';
import MeAbout from '../../assets/meabout.png';


const About = () => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [] );
  

  return (

    <AboutContainer id='about' ref={revealContainer} >
      <Heading>About</Heading>
      <FlexContainer>
        <AboutContent>{bio.about}</AboutContent>
        <Picture>
          <AvatarLink href= 'https://github.com/sandramtzd'>
            <Avatar src={MeAbout} alt='Avatar'/>
          </AvatarLink>
        </Picture>
      </FlexContainer>

    </AboutContainer>
   
  )
}

export default About
