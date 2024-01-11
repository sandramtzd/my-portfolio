import React, {useEffect, useRef, useState} from 'react'
import { ProjectsContainer, Heading, ToggleGroup, ToggleButton, CardContainer, Divider } from './ProjectsStyle'
import sr from '../../utils/Scroll';
import { srConfig } from '../../utils/ScrollConfig';
import { projects } from '../../utils/data/constants';
import ProjectCard from './ProjectCard';


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState("all");
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [] );

  return (
    <ProjectsContainer id="projects" ref={revealContainer}>
      <Heading>Projects</Heading>
      <ToggleGroup>
      {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }

          <Divider />
          
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>Web App's</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>Web App's</ToggleButton>
          }

          <Divider />
         
          {toggle === 'mobile app' ?
            <ToggleButton active value="mobile app" onClick={() => setToggle('mobile app')}>Mobile App's</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('mobile app')}>Mobile App's</ToggleButton>
          }

          <Divider />
         
          {toggle === 'data' ?
            <ToggleButton active value="data" onClick={() => setToggle('data')}>Data Analysis</ToggleButton>
            :
            <ToggleButton value="data" onClick={() => setToggle('data')}>Data Analysis</ToggleButton>
          }

      </ToggleGroup>
      <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>

      
    </ProjectsContainer>
  )
}

export default Projects
