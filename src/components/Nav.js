import React from "react";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
    return (
            <nav class="main-nav">
                <ul>
                    <li><Link to="/cats">Cats</Link></li>
                    <li><Link to="/dogs">Dogs</Link></li>
                    <li><Link to="/computer">Computers</Link></li>
                </ul>
            </nav> 
    )
}

export default Nav