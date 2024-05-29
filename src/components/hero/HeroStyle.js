import styled from "styled-components";


export const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem 5rem 2rem 7rem;

  @media (max-width: 768px) {
    padding: 2rem;
    
  }
  @media (max-width: 480px) {
    padding: 1rem;
    
  }

`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;

`;

export const Greeting = styled.h3`
  font-size: 1rem;
  font-family: 'Karla', sans-serif;
  text-align: left;
  margin-bottom: 0.5rem;

`;

export const Name = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  text-align: left;
  line-height: 1.1;
  color: var(--color-primary);
  margin-bottom: 0rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
  
`;


export const TextLoop = styled.div`
  color: var(--color-bg-variant);
  font-weight: 600;
  font-size: 1.8rem;
  display: flex;
  gap: 0.5rem;
  line-height: 2;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }


  
`;

export const Span = styled.div`
    color: var(--color-secondary;
  
`;

export const Description = styled.div`
    color: var(--color-primary);
    font-size: 1.2rem;
    font-family: 'Karla', sans-serif;
    margin: 0 0 1rem;
    padding-right: 3rem;
    text-align: justify;

    @media (max-width: 768px) {
      padding-right: 3rem;

    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  
`;


export const ButtonContact = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 0.5rem;

  .btn {
    font-size: 1rem;
    border-radius: 0.8rem;
    padding: 0.3rem 0.9rem;
  }
  
`;