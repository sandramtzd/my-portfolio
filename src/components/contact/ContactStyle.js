import styled from "styled-components";

export const ContactContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 200px;
    max-width: 100%;
    align-items: center;


`;

export const Heading = styled.h3`
    position: relative;
    display: flex;
    align-items: center;
    margin: 10px 0 40px;
    width: 100%;
    white-space: nowrap;
    font-size: xxx-large;
    font-weight: 300;
    line-height: 1.3;

    &:after {
        content: "";
        width: 70%;
        height: 1.5px;
        background: var(--color-primary);
        margin-left: 50px;

`;

export const Description = styled.p`
    font-size: 18px;
    text-align: center;
    max-width: 600px;


`;


export const ContactForm = styled.form`
    width: 95%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    padding: 32px;
    gap: 12px;

`;

export const ContactTitle = styled.div`
    font-size: 24px;
    text-align: center;
    margin-bottom: 6px;
    font-weight: 600;
    



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
    padding: 30px 20px;
    margin-top: 10px;
    border-radius: 12px;
    border: none;
    font-size: 18px;
    color: var(--color-bg);
    cursor: pointer;




`;