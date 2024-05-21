import { NavLink } from "react-router-dom";
import styles from "../styles/NavigationBar.module.css";

export function NavigationBar () {
    return (
        <div className={styles.navbar}>
            <h1 className={styles.title}>Mem Serwis </h1>

            <ul className={styles.buttonsList}>
                <li className={styles.navButton}>
                    <NavLink to='/' 
                    className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                    >Home</NavLink>
                </li>
                <li className={styles.navButton}>
                    <NavLink to='/regular' 
                    className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                    >Regular</NavLink>
                </li>
                <li className={styles.navButton}>
                    <NavLink to='/hot' 
                    className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                    >Hot</NavLink>
                </li>
                <li className={styles.navButton}>
                    <NavLink to='/favourites' 
                    className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                    >Favourites</NavLink>
                </li>
                <li className={styles.navButton}>
                    <NavLink to='/addnew' 
                    className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                    >Add Mem</NavLink>
                </li>
            </ul>
        </div>
    );
}