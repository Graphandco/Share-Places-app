import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
    return (
        <ul className='nav-links'>
            <li>
                <NavLink to='/' exact>
                    Tous les utilisateurs
                </NavLink>
            </li>
            <li>
                <NavLink to='/u1/places'>Mes Endroits</NavLink>
            </li>
            <li>
                <NavLink to='/places/new'>Ajouter un endroit</NavLink>
            </li>
            <li>
                <NavLink to='/auth'>Connexion</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;
