import styled from "styled-components";


export const ProjectsContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
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

export const ToggleGroup = styled.div`
    display: flex;
    border: 1.5px solid var(--color-primary);
    color: var(--color-primary);
    font-size: 16px;
    border-radius: 12px,
    font-weight: 500;
    margin: 12px 0;

`;

export const ToggleButton = styled.div`
    padding: 8px 18px;
    cursor: pointer;
    border-radius: 6px;
    &:active {
        background-color: var(--color-primary);
    }

    &:hover {
        background-color: var(--color-primary + 8);

    }

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