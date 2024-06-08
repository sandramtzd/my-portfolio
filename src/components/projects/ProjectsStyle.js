import styled from "styled-components";


export const ProjectsContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    padding: 2rem 5rem 2rem 7rem;

    @media (max-width: 768px) {
        padding: 2rem;
        margin-top; 1rem;
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

export const ToggleGroup = styled.div`
    display: flex;
    border: 0.1rem solid var(--color-primary);
    color:  var(--color-light-variant);
    font-size: 1rem;
    border-radius: 0.4rem;
    font-weight: 500;
    margin: 22px 0px;
    margin-bottom: 50px;

    @media (max-width: 768px) {
        font-size: 0.6rem;
    }

`;

export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;

    &:active {
        background-color: var(--color-bg-variant);
    &:hover {
        background-color: var(--color-bg-variant);
    }
    @media (max-width: 768px) {
        
        
    }

`;

export const Divider = styled.div`
    width: 1.5px;
    background: var(--color-primary);


`;


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;

`;




export const Grid = styled.div`
    display: grid;
    margin-top: 50px;
    margin-left: 10%;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 5px;
    position: relative;

`;

export const ProjectCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap; wrap;
    background: var(--color-primary);


`;

export const Project = styled.div`
    display: grid;

`;

export const ProjectInner = styled.div`
    display: grid;

`;

export const ProjectHeader = styled.div`
    display: grid;

`;
export const Folder = styled.div`
    display: grid;

`;

export const ProjectLinks = styled.div`
    display: grid;

`;

export const IconLink = styled.div`
    display: grid;

`;

export const ProjectName = styled.div`
    display: grid;

`;

export const ProjectDescription = styled.div`
    display: grid;

`;