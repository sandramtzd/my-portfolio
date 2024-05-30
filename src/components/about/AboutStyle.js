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
        width: 40%;
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
    margin-bottom: 20px;
    text-align: left;
    padding: 0;
    margin: 0;

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

`;

export const Avatar = styled.img`
    position: relative;
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
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Skill = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: calc(50% - 10px);
    margin-right: 20px;
  }
`;

export const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: var(--color-primary);
`;

export const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const SkillItem = styled.li`
  font-size: 1rem;
  color: var(--color-light);
  margin-bottom: 10px;
`;


















