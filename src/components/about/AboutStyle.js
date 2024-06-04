import styled from "styled-components";

export const AboutContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 5rem 2rem 7rem;
    width: 100%;

    @media (max-width: 768px) {
        padding: 2rem;
    }   
    @media (max-width: 480px) {
        padding: 1rem;
    }
`;

export const Heading = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: var(--color-light);
    text-align: left;
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;

    &:after {
        position: relative;
        content: "";
        width: 50%;
        height: 1px;
        margin-left: 40px;
        background: var(--color-light);
        opacity: 0.5;
    }
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
   
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
      }
`;

export const AboutContent = styled.div`
    width: 100%;
    text-align: left;
    margin-left: 1rem;
    
    

    @media (min-width: 768px) {
        margin-right: 2rem;
         
      }
    
    @media (max-width: 480px) {
        font-size: 1rem;
      } 
`;

export const Picture = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    
`;

export const Avatar = styled.img`
    filter: grayscale(100%) contrast(1);
    border-radius: 5px;
    box-shadow: 0 10px 30px -15px var(--color-primary);
    transition: var(--transition);
    width: 200px;
    

    &:hover,
    &:focus-visible {
      box-shadow: 0 20px 30px -15px var(--color-primary);
      transform: translate(-10px, -5px)
    }
`;

export const AvatarLink = styled.a`
    display: block;
    overflow: hidden;
    
    &:hover,
    &:focus {
      
      ${Avatar} {
        filter: none;
        mix-blend-mode: normal;
      }
    }
`;


export const SkillsContainer = styled.div`
  display: grid;
  gap: 1rem;
  width: 100%;
  margin-top: 10px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));


`;

export const Skill = styled.div`
`;

export const SkillTitle = styled.h3`
  font-size: 1rem;
  color: var(--color-primary);
`;

export const SkillList = styled.ul`
  margin-bottom: 10px;
  

  
`;

export const SkillItem = styled.li`
  list-style-type: square;
  font-size: 0.9rem;
  color: var(--color-light);
  margin-left: 20px;

`;


















