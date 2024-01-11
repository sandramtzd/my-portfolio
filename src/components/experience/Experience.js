import React, {useState, useEffect, useRef} from 'react'
import { ExperienceContainer, Heading, Tabs, TabsList, TabButton, TabHighlighted, TabContent, Job, JobTitle, CompanyName, JobDetails } from './ExperienceStyle'
import { experiences } from '../../utils/data/constants';
import sr from '../../utils/Scroll';
import { srConfig } from '../../utils/ScrollConfig';

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);

  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [] );

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
    } else {
      // If we are at the end, go to the start
      if (tabFocus >= tabs.current.lenght) {
        setTabFocus(0);
      }

      //If we are at the start, move to the end
      if (tabFocus < 0) {
        setTabFocus(tabs.current.length - 1);
      }
    }
  };

  useEffect(() => focusTab(), [tabFocus]);

  const onKeyPressed = e => {
    if(e.keyCode === 38 || e.keyCode ===40) {
      e.preventDefault();
      if (e.keyCode === 40){
        // Move down
        setTabFocus(tabFocus + 1);
      } else if (e.keyCode === 38) {
        // Move up 
        setTabFocus(tabFocus -1);
      }
    }
  }
  return (
    <ExperienceContainer id='experience' ref={revealContainer}>
      <Heading>Experience</Heading>
      <p>under construction</p>
      {/* <Tabs>
        <TabsList role="tablist" onKeyDown={e => onKeyPressed(e)}>
            {experiences.map((item) => (
              <li key={item}>
                <TabButton
                  isActive={activeTabId === item}
                  onClick={() => setActiveTabId(item)}
                  role='tab'
                  tabIndex={activeTabId === item ? '0' : '-1'}
                  ref={el => (tabs.current[item] = el)}
                  id={`tab-${item}`}
                  aria-selected={activeTabId === item ? true : false}
                  aria-controls={`panel-${item}`}
                >
                  {item.company}
                </TabButton>
                </li>
            ))}
            <TabHighlighted activeTabId ={activeTabId}/>
        </TabsList>

        <TabContent>
          {experiences.map((item) => (
            <Job>
              <JobTitle>{item.role}</JobTitle>
              <CompanyName>{item.company}</CompanyName>
              <JobDetails>{item.date} {item.desc}</JobDetails>
            </Job>
            
          ))}
        </TabContent>
      </Tabs> */}
    </ExperienceContainer>
  )
}

export default Experience
