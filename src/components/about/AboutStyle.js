import styled from "styled-components";

export const AboutContainer = styled.section`
    margin: 0 auto;
    padding: 150px 0;
    max-width: 1000px;
    position: relative;


`;

export const Heading = styled.h3`
    position: relative;
    display: flex;
    align-items: center;
    margin: 10px 0 40px;
    width: 100%;
    white-space: nowrap;
    font-size: 50px;
    font-weight: 300;
    line-height: 1.3;

    &:after {
        content: "";
        width: 70%;
        height: 1.5px;
        background: var(--color-primary);
        margin-left: 50px;
        

    }
`;


export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-items: flex-start;
    

`;

export const AboutContent = styled.div`
    width: 60%;
    max-width: 480px;

   
   

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






