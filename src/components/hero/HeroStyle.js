import styled from "styled-components";


export const Hero = styled.div`
  justify-content: center;
  position: relative;
  padding: 20px 100px;

  @media (max-width: 768px) {
    padding: 20px 20px;
    
  }



`;

export const HeroContainer = styled.div`
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;

`;

export const Greeting = styled.h3`
  font-size: 16px;
  font-family: 'Karla', sans-serif;
  display: flex;


  
`;

export const Name = styled.h1`
  transition-delay: 200ms;
  font-size: 60px;
  font-weight: 600;
  display: flex;
  line-height: 1.1;
  color: var(--color-light)

  @media (max-width: 768px) {
    
    color: var(--color-light)
  }
  
`;


export const TextLoop = styled.div`
  color: var(--color-bg-variant);
  font-weight: 600;
  font-size: 33px;
  display: flex;
  gap: 12px;
  line-height: 80px;


  
`;

export const Span = styled.div`
    color: var(--color-secondary;
    display: flex;
  
`;

export const Description = styled.div`
    color: var(--color-primary);
    display: flex;
    font-size: 20px;
    font-family: 'Karla', sans-serif;
    margin: 0px 0px 20px;
    padding-right: 60px;

    @media (max-width: 768px) {
      padding-right: 0px;
      font-size: 20px;

    }
  
`;





export const ButtonContact = styled.button`
  display: flex;
  font-size: 18px;
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  

  
`;