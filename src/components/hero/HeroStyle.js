import styled from "styled-components";


export const Hero = styled.div`
  justify-content: center;
  position: relative;
  padding: 20px 200px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

`;

export const HeroContainer = styled.div`
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Greeting = styled.h3`
  transition-delay: 100ms;
  margin: 0px 0px 20px 0px;
  font-size: 25px;
  font-family: 'Karla', sans-serif;
  display: flex;
  
`;

export const Name = styled.h1`
  transition-delay: 200ms;
  font-size: 80px;
  font-weight: 600;
  display: flex;
  line-height: 1.1;
  margin: 0px;
  
`;


export const TextLoop = styled.div`
  color: var(--color-bg-variant);
  font-weight: 600;
  font-size: 40px;
  display: flex;
  gap: 12px;
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
  
`;

export const Span = styled.div`
    color: var(--color-primary);
    display: flex;
  
`;

export const Description = styled.div`
    color: var(--color-primary);
    display: flex;
    font-size: 25px;
    font-family: 'Karla', sans-serif;
    margin: 0px 0px 20px;
    padding-right: 300px;
  
`;





export const ButtonContact = styled.div`

  display: flex;
  
`;