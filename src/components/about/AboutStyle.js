import styled from "styled-components";

export const AboutContainer = styled.section`
    position: relative;
    justify-content: center;
    padding: 20px 200px;

    @media (max-width: 960px) {
      padding: 66px 16px;
    }
    @media (max-width: 640) {
      padding: 32px 16px;
    }
    z-index: 1;
`;

export const Heading = styled.h3`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    white-space: nowrap;
    font-size: 50px;
    font-weight: 300;
    line-height: 1.3;

    &:after {
        content: "";
        width: 70%;
        height: 1.5px;
        background: var(--color-primary);
        margin-left: 50px;
        

    }
`;

export const AboutContent = styled.div`

`;

export const FlexContainer = styled.div`

`;

export const Picture = styled.div`

`;





