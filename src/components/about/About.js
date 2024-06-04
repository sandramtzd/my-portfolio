import React, {useEffect, useRef} from 'react'
import {AboutContainer, Heading, FlexContainer, AboutContent, Picture, Avatar, AvatarLink, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem} from './AboutStyle.js'
import { bio, skills } from '../../utils/data/constants';
import sr from '../../utils/Scroll';
import { srConfig } from '../../utils/ScrollConfig';
import MeAbout from '../../assets/meabout.png';


const About = () => {
  const revealContainer = useRef(null);
  
  useEffect(() => {
    if (sr) {
      sr.reveal(revealContainer.current, srConfig(100));
    }
  }, []);
    
  return (

    <AboutContainer id='about' ref={revealContainer} >
      <Heading>About</Heading>
      <FlexContainer>
        <Picture>
          <AvatarLink href='https://github.com/sandramtzd'>
            <Avatar src={MeAbout} alt='Avatar' />
          </AvatarLink>
        </Picture>
        <AboutContent>
          <p>{bio.about[0]}</p><br />
          <p>{bio.about[1]}</p><br />
          <p>{bio.about[2]}</p><br />
        </AboutContent>
      </FlexContainer>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <Skill key={index}>
            <SkillTitle>{skill.title}</SkillTitle>
            <SkillList>
              {skill.skills.map((item, index) => (
                <SkillItem key={index}>{item.name}</SkillItem>
              ))}
            </SkillList>
          </Skill>
        ))}
      </SkillsContainer>
    </AboutContainer>
   
  )
}

export default About
