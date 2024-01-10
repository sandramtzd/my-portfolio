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

`;

export const Logo = styled.div`
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    
    svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;
    #B {
        opacity: 0;
    }
    }
`;


