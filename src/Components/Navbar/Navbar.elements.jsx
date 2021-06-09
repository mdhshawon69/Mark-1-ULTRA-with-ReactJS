/* eslint-disable import/prefer-default-export */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavItems = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        width: 100%;
        flex-direction: column;
        height: 90vh;
        position: absolute;
        left: ${({ click }) => (click ? 0 : '-100%')};
        top: 80px;
        transition: all 0.5s ease;
        opacity: 1;
        background-color: #101522;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #4b59f7;
    }

    @media screen and (max-width: 960) {
        border: none;
        width: 100%;
    }
`;

export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0.5rem 1rem;
    height: 100%;

    &:hover {
        color: #4b59f7;
        transition: all 0.3s ease;
    }

    @media screen and (max-width: 960) {
        width: 100%;
        display: table;
        text-align: center;
        padding: 2rem;
    }
`;

export const NavItemBtn = styled.li`
    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 10px;
    outline: none;
    text-decoration: none;
    border: none;

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;
