import React, {useEffect, useRef} from 'react'
import { AboutContainer, Heading, FlexContainer, AboutContent, Picture, Avatar, AvatarLink, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage, LeftContainer} from './AboutStyle'
import { bio, skills } from '../../utils/data/constants';
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
        <LeftContainer>
          <AboutContent>
            <p>{bio.about[0]}</p><br/>
            <p>{bio.about[1]}</p><br/>
            <p>{bio.about[2]}</p><br/>
          </AboutContent>

        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image}/>
                      {item.name}
                  </SkillItem>
                ))}
              </SkillList>

            </Skill>
            
     
         
          ))}

        </SkillsContainer>
        </LeftContainer>

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
