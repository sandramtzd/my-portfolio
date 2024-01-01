import styled from "styled-components";
import { css } from "styled-components";

export const ExperienceContainer = styled.section`
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    padding: 150px 0;


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


