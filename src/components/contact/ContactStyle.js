import styled from "styled-components";

export const ContactContainer = styled.section`
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 40px;
    width: 100%;
    white-space: nowrap;
    font-size: 3rem;
    font-weight: 400;
    line-height: 1.3;
    color: var(--color-light)



`;

export const Description = styled.p`
    font-size: 1rem;
    text-align: center;
    max-width: 100%;
    color: var(--color-secondary);

    @media (max-width: 768px) {
        margin-right: 2rem;
  
      }
  


`;


export const ContactForm = styled.form`
    display: flex; 
    flex-direction: column;   
    width: 90%;
    max-width: 500px;
    padding: 32px;
    gap: 12px;

    @media (max-width: 768px) {
        align-items: center;
      }

`;


export const ContactInput = styled.input`
    flex: 1;
    background-color: transparent;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
    outline: none;
    font-size: 18px;
    border-radius: 12px;
    padding: 12px 16px;

    &:focus {
        border: 1px solid var(--color-light)
    }



`;

export const ContactInputMessage = styled.textarea`
    flex: 1;
    background-color: transparent;
    border: 1px solid var(--color-primary);
    outline: none;
    font-size: 18px;
    color: var(--color-primary);
    border-radius: 12px;
    padding: 12px 16px;

    &:focus {
        border: 1px solid var(--color-light)
    }




`;

export const ContactButton = styled.button`
    width: 100%;
    text-align: center;
    background: var(--color-primary);
    padding: 15px 15px;
    margin-top: 10px;
    border-radius: 12px;
    border: none;
    font-size: 18px;
    color: var(--color-bg);
    cursor: pointer;




`;