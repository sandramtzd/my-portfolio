import styled from "styled-components";

export const SocialsContainer = styled.div`
    width: 100px;
    position: fixed;
    bottom: 0px;
    left: 0.5rem;
    right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    line-height: 1;
    font-size: 2rem;
    padding: 10px;
    z-index: 10;  

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

export const SocialsFooterContainer = styled.div`
      display: none;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      font-size: 1.5rem;
      padding: 10px;
      

      @media screen and (max-width: 768px) {
        display: flex;
      }

      a {
        color: var(--color-primary);
        transition: var(--transition);
    
        &:hover {
          color: var(--color-light);
        }
      }


`;






