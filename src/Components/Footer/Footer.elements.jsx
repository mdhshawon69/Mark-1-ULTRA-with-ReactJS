import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.div`
    padding: 4rem 0 2rem 0;
    background: #101522;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const FooterSubscription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-bottom: 24px;
    padding-bottom: 24px;
    color: #fff;
`;

export const FooterSubheading = styled.p`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
        Helvetica, sans-serif;
    margin-bottom: 24px;
    font-size: 24px;
`;

export const FooterSubText = styled.p`
    margin-bottom: 24px;
    font-size: 20px;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 80%;
    }
`;

export const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    border: none;
    outline: none;
    margin-right: 10px;
    font-size: 16px;
    border: 1px solid #fff;

    &::placeholder {
        color: #242424;
    }

    @media screen and (max-width: 820px) {
        width: 100%;
        margin: 0 0 16px 0;
    }
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 1000px;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    box-sizing: border-box;
    color: #fff;
    width: 160px;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h2`
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    padding: 0.5rem;

    &:hover {
        color: #0467fb;
        transition: 0.3s all ease;
    }
`;
