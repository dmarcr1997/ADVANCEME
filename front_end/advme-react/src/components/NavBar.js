import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) =>{
    function capitalize(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }; 
    const linkStyle = {
        width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        background: 'blue',
        textDecoration: 'none',
        color: 'white',
        border: 'solid blue',
        borderRadius: '10px'
    };

    return(
        <div>
            {props.links.map(link => <NavLink to={`${link}`} exact style={linkStyle}>{capitalize(link)}</NavLink>)}
        </div>
    )
}
export default NavBar
 