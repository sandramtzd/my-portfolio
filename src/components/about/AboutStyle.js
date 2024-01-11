import styled from "styled-components";

export const AboutContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    padding: 150px 200px;
    z-index: 1;

    @media (max-width: 960px) {
        padding: 66px 16px;
    }
    @media (max-width: 640) {
        padding: 32px 16px;
    }   



`;

export const Heading = styled.h1`
    position: relative;
    display: flex;
    align-items: center;
    margin: 10px 0 40px;
    width: 100%;
    white-space: nowrap;
    font-size: 3.5rem;
    color: var(--color-light);
    
    line-height: 1.3;

    &:after {
        content: "";
        width: 100%;
        height: 1.5px;
        background: var(--color-light);
        margin-left: 50px;
        

    }
`;


export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    
    

`;

export const AboutContent = styled.div`
    width: 60%;
    font-size: 20px;
    justify-content: space-evenly;

   
   

`;

export const SkillsContainer = styled.ul`
    display: grid;
    grid-template-columns:repeat(5, 150px);
    overflow: hidden;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

`;

export const Skill= styled.div`
    position:relative;
    margin-bottom: 10px;
    padding-left: 20px;
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

export const LeftContainer = styled.div`
    position:relative;
`;



export const Picture = styled.div`
    position: relative;
    width: 40%;
    max-width: 300px;
    margin-left: 60px;
    
`;


export const Avatar = styled.img`
    position: relative;
    filter: grayscale(100%) contrast(1);
    border-radius: 3px;
    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)';
    box-shadow: 0 10px 30px -15px var(--color-primary);


`;

export const AvatarLink = styled.a`
    
    width: 100%
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






