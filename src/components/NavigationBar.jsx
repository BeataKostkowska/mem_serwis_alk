import { NavLink } from "react-router-dom";

export function NavigationBar () {
    return (
        <div>
            <h1>Mem Serwis</h1>

            <ul>
                <li className="navButton">
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className="navButton">
                    <NavLink to='/regular'>Regular</NavLink>
                </li>
                <li className="navButton">
                    <NavLink to='/hot'>Hot</NavLink>
                </li>
            </ul>
        </div>
    );
}