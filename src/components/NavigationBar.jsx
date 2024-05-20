import { NavLink } from "react-router-dom";
import styles from "../styles/NavigationBar.module.css";

export function NavigationBar () {
    return (
        <div className={styles.navbar}>
            <h1 className={styles.title}>Mem Serwis </h1>

            <ul className={styles.buttonsList}>
                <li className={styles.navButton}>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className={styles.navButton}>
                    <NavLink to='/regular'>Regular</NavLink>
                </li>
                <li className={styles.navButton}>
                    <NavLink to='/hot'>Hot</NavLink>
                </li>
                <li className={styles.navButton}>
                    <NavLink to='/favourites'>Favourites</NavLink>
                </li>
            </ul>
        </div>
    );
}