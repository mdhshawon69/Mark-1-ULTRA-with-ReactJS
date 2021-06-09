/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { FaBars, FaMagento, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../GlobalStyles';
import './Navbar.css';
import { NavBtnLink, NavItem, NavItemBtn, NavItems, NavLink } from './Navbar.elements';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className="nav-bar">
                    <Container>
                        <Link to="/" className="logo-area">
                            <FaMagento className="logo-icon" /> ULTRA
                        </Link>
                        <div className="mobile-nav-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <NavItems onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/services">
                                    Services
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/products">
                                    Products
                                </NavLink>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/sign-up">
                                        <Button primary>SIGN UP</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/sign-up">
                                        <Button primary fontBig>
                                            SIGN UP
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavItems>
                    </Container>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
