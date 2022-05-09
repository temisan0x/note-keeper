import React from 'react'
import { NavLink } from "react-router-dom";
import '../../styles/global.css';

function SideBar() {

    return (
        <ul>
            <li>
                <NavLink
                    style={({ isActive }) => {
                        return {
                            display: "block",
                            margin: "1rem 0",
                            color: isActive ? "crimson" : "",
                        };
                    }}
                    to='/' >Home</NavLink>
            </li>
            <li >
                <NavLink
                    style={({ isActive }) => {
                        return {
                            display: "block",
                            margin: "1rem 0",
                            color: isActive ? "crimson" : "",
                        };
                    }}
                    to='/journal'>Journal</NavLink>
            </li>
        </ul>
    )
}

export default SideBar