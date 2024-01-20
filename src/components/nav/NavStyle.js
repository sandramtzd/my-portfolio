import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
    background: var(--color-bg);
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: var(--transition);
    @media (max-width: 960px) {
        trasition: 0.8s all ease;
    }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 24px;
`;


export const NavLogo = styled(LinkR)`
    width: 100%;
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
      transform: translate(-100%, 40%);
      font-size: 1.7rem;
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
    width: 30%;
    padding: 12px 0px 12px 20px;
    background: var(--color-bg-light);
    transition: all 0.6s ease-in-out;
    border-radius: 5px 5px 5px 5px;
`;




