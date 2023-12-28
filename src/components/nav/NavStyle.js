import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
    background: red;
    height: 100px;
    display: flex;
    @media (max-width: 960px) {
        trasition: 0.8s all ease;
    }
`;

export const NavContainer = styled.div`
  display: flex;
  
  padding: 0px 24px;
  width: 100%;
  max-width: 1200px;
`;


export const NavLogo = styled.div`
    width: 10%;
    padding: 0 6px;
    display: flex;
    justify-content: start;
    @media (max-width: 640px) {
        padding: 0 0px;
    }

`;


export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 32px;
    padding: 0 6px;
    font-size: x-large;
    @media screen and (max-width: 768px) {
        display: none;
      }
   
`;

export const NavLink = styled.a`
    color: var ( --color-primary)
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: var (--color-primary);
    }

    &.active {
      border-bottom: 2px solid var (--color-primary);
    }
`;
