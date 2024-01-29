import styled from "styled-components";

export const SocialsContainer = styled.div`
    width: 100px;
    position: fixed;
    bottom: 0px;
    left: 40;
    right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    line-height: 1;
    font-size: 2rem;
    padding: 10px;

    &:after {
        content: "";
        width: 1.5px;
        height: 6rem;
        background: var(--color-primary);

    }

    @media screen and (max-width: 768px) {
        display: none;
      }



 
`;






