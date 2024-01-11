import styled from "styled-components";

export const ContactContainer = styled.section`
    margin: 0 auto 100px;
    padding: 150px 0;
    text-align: center;
    max-width: 600px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
    

    


`;

export const Heading = styled.h1`
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 40px;
    width: 100%;
    white-space: nowrap;
    font-size: 4rem;
    font-weight: 600;
    line-height: 1.3;
    color: var(--color-light)



`;

export const Description = styled.p`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: var(--color-secondary);


`;


export const ContactForm = styled.form`
    width: 95%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    padding: 32px;
    gap: 12px;

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
    padding: 20px 20px;
    margin-top: 10px;
    border-radius: 12px;
    border: none;
    font-size: 18px;
    color: var(--color-bg);
    cursor: pointer;




`;