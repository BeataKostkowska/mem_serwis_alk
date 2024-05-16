import { NavLink } from "react-router-dom";

export function NavigationBar () {
    return (
        <div>
            <h1>Mem Serwis</h1>
            
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/regular'>Regular</NavLink></li>
                <li><NavLink to='/hot'>Hot</NavLink></li>
            </ul>
        </div>
    );
}