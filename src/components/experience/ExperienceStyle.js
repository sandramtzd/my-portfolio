import styled from "styled-components";
import { css } from "styled-components";

export const ExperienceContainer = styled.section`
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
font-size: 2.5rem;
    margin-bottom: 20px;
    color: var(--color-light);
    text-align: left;
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;

    &:after {
        position: relative;
        content: "";
        width: 50%;
        height: 1px;
        margin-left: 40px;
        background: var(--color-light);
        opacity: 0.5;
    }
`;

export const Tabs = styled.div`
    display: flex;
    align-items: flex-start;
    position: relative;
`;

export const TabsList = styled.div`
    display: block;
    position: relative;
    width: max-content;
    z-index: 3;
    padding; 0;
    margin: 0;
    list-style: none;

`;

export const TabButton = styled.div`
    display: flex;
    align-items: center;
    width: 100%;


`;

export const TabHighlighted = styled.div`
    display: block;
    background: green;
    width: 100px;
    height: 10px;
    position: absolute;
    top: 0;
    left: 0;

 
    

`;

export const TabContent = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding-top: 12px;
    padding-left: 30px;

`;

export const Job = styled.div`
    font-size: large;
    font-weight: 600;
    margin-bottom: 10px;

`;

export const JobTitle = styled.div`
    display: flex;

`;

export const CompanyName = styled.div`
    display: flex;

`;


export const JobDetails = styled.div`
    display: flex;

`;


