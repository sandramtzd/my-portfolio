import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
    background: var(--color-bg);
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trasition: 0.8s all ease;
    }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0px 24px;
`;


export const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 6px;
    display: flex;
    justify-content: start;
    align-items: center;
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
    @media screen and (max-width: 768px) {
        display: none;
      }
   
`;


export const ButtonContainer = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 18px;
    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.5rem;
      cursor: pointer;
    }
`;

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 70%;
    padding: 12px 40px 24px 40px;
    background: var(--color-bg-variant);
    transition: all 0.6s ease-in-out;
    border-radius: 0 0 20px 20px;
`;

export const MobileLink = styled(LinkR)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    :hover {
      color: var(--color-primary);
    }
  
    &.active {
      border-bottom: 2px solid var(--color-primary);
    }


`;


