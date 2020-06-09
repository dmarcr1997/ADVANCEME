import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) =>{
    function capitalize(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    } 
    return(
        <ul>
            {props.links.map(link => <li><NavLink to={`${link}`} exact>{capitalize(link)}</NavLink></li>)}
        </ul>
    )
}
export default NavBar
 