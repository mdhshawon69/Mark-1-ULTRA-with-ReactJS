import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export const Button = styled.button`
    background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
    border-radius: 4px;
    padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
    border: none;
    color: #fff;
    white-space: nowrap;
    outline: none;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease;
        background: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    z-index: 1;

    @media screen and (768px) {
        margin: auto;
    }
`;

export default GlobalStyle;
