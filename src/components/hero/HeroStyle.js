import styled from "styled-components";


export const Hero = styled.div`
  justify-content: center;
  position: relative;
  padding: 20px 200px;


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
  font-size: 16px;
  font-family: 'Karla', sans-serif;
  display: flex;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  
`;

export const Name = styled.h1`
  transition-delay: 200ms;
  font-size: 70px;
  font-weight: 600;
  display: flex;
  line-height: 1.1;
  margin: 0px;
  color: var(--color-light)

  @media (max-width: 768px) {
    font-size: 60px;
    color: var(--color-light)
  }
  
`;


export const TextLoop = styled.div`
  color: var(--color-bg-variant);
  font-weight: 600;
  font-size: 40px;
  display: flex;
  gap: 12px;
  line-height: 100px;
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
    color: var(--color-secondary;
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





export const ButtonContact = styled.button`
  display: flex;
  font-family: 'Karla', sans-serif;
  font-size: 22px;
  border-radius: 30px;

  
`;