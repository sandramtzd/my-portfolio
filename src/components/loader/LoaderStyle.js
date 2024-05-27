import styled from "styled-components";


export const LoaderContainer = styled.div`
    background-color: var(--color-bg);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

export const LogoWrapper = styled.div`
    width: max-content;
    transition: var(--transition);
    
    svg {
        width: 80%;
        height: 80%;
        display: block;
        margin: 0 auto;
        fill: none;
        user-select: none;
        stroke: rgba(251, 189, 152, 1); // Initial stroke color
        stroke-width: 20;

    path {
        fill: none;
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        }
      }
`;



