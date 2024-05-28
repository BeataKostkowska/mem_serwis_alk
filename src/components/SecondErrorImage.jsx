import { NavLink } from "react-router-dom";
import routerError from "../memes_images/404router.jpg";

export function SecondErrorImage () {

    return (
        <div>
            <img src={routerError} alt="404 check router" className="errorImage"></img>
            <button className="errorPageButton">
                <NavLink to='/' className="goToHomeButton">Take me to Homepage</NavLink>
            </button>
        </div>
        );
};