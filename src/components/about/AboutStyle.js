import styled from "styled-components";

export const AboutContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    padding: 150px 100px;
    z-index: 1;

    @media (max-width: 960px) {
        padding: 100px 100px;
    }
    @media (max-width: 768px) {
        padding: 150px 20px;
        
    }   



`;

export const Heading = styled.h1`
    position: relative;
    display: flex;
    align-items: center;
    margin: 10px 0 20px;
    width: 100%;
    white-space: nowrap;
    font-size: 2.2rem;
    color: var(--color-light);
    
    line-height: 1;

    &:after {
        content: "";
        width: 100%;
        height: 0.5px;
        background: var(--color-light);
        margin-left: 50px;
        

    }
`;


export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    
    
    

`;

export const AboutContent = styled.div`
    width: 100%;
    font-size: 15px;
    

   
   

`;

export const SkillsContainer = styled.ul`
    display: grid;
    grid-template-columns:repeat(5, 100px);
    overflow: hidden;
    list-style: none;

`;

export const Skill= styled.div`
    position:relative;
    margin-bottom: 10px;
    font-family: 'Karla' sans-serif;
    color: var(--color-secondary);
    

`;

export const SkillTitle= styled.div`
    position:relative;
    color: var(--color-primary)
`;

export const SkillList= styled.div`
    position:relative;
`;

export const SkillItem= styled.div`
    position:relative;
`;

export const SkillImage= styled.div`
    position:relative;
`;





export const Picture = styled.div`
    position: relative;
    width: 50px;
    margin-left: 50px;
    
    
`;


export const Avatar = styled.img`
    position: relative;
    filter: grayscale(100%) contrast(1);
    border-radius: 3px;
    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)';
    box-shadow: 0 10px 30px -15px var(--color-primary);


`;

export const AvatarLink = styled.a`
    
    position: relative;
    border-radius: 3px;
    margin-left: -20px;
    &:hover,
    &:focus {
      background: transparent;
      &:after {
        top: 15px;
        left: 15px;
      }
      ${Avatar} {
        filter: none;
        mix-blend-mode: normal;
      }

    }


`;






