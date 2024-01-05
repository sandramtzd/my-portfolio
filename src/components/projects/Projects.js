import React, { useState } from 'react'
import { Heading, ProjectsContainer, Grid, Project, ProjectInner, ProjectHeader, Folder, ProjectLinks, IconLink, ProjectName, ProjectDescription, ToggleGroup, ToggleButton, ProjectCard } from './ProjectsStyle'
import { FaGithub, FaRegFolderOpen, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from '../../utils/data/constants';


const Projects = () => {
  const [toggle, setToggle] = useState('all');
  
  
  return (
    <ProjectsContainer id='projects'>
      <Heading>Projects</Heading>
      <ToggleGroup>
        {toggle === 'all' ?
          <ToggleButton active value= 'all' onClick={() => setToggle('all')}>All</ToggleButton>
          :
          <ToggleButton value= 'all' onClick={() => setToggle('all')}>All</ToggleButton>
        }
        {toggle === 'web app' ?
          <ToggleButton active value= 'web app' onClick={() => setToggle('web app')}>Web App's</ToggleButton>
          :
          <ToggleButton value= 'web app' onClick={() => setToggle('web app')}>Web App's</ToggleButton>
        }

        {toggle === 'data' ?
          <ToggleButton active value= 'data' onClick={() => setToggle('data')}>Data Analytics</ToggleButton>
          :
          <ToggleButton value= 'data' onClick={() => setToggle('data')}>Data Analytics</ToggleButton>
        } 

        {toggle === 'mobile' ?
          <ToggleButton active value= 'mobile app' onClick={() => setToggle('mobile app')}>Mobile App's</ToggleButton>
          :
          <ToggleButton value= 'mobile app' onClick={() => setToggle('mobile app')}>Mobile App's</ToggleButton>
        } 

      </ToggleGroup>
      <Grid>
        {toggle === 'all' && projects
          .map((project) => (
            <ProjectCard project={project} />
        ))}
        {projects
          .filter((item) => item.category == toggle)
          .map((project) => (
            <ProjectCard project = {project}/>
        ))}

      </Grid>

      


      <Grid>
        <Project>
          <ProjectInner>
            <header>
              <ProjectHeader>
                <Folder>
                  <FaRegFolderOpen name= "Folder"/>
                </Folder>
                <ProjectLinks>
                  <IconLink
                    
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="GitHub Link"
                    >
                      <FaGithub name = "GitHub"/>
                    </IconLink>
                
                    <IconLink
                   
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="External Link"
                    >
                      <FaExternalLinkAlt name="External"/>
                    </IconLink>
                  

                </ProjectLinks>
              </ProjectHeader>
              <ProjectName>Project Name</ProjectName>
              <ProjectDescription />
            </header>
            <footer>
              
            </footer>
          </ProjectInner>
        </Project>
      </Grid>
      
    </ProjectsContainer>
  )
}

export default Projects
