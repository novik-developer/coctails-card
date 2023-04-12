import React from "react";
import styles from "./navBar.module.scss";
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="navbar justify-content-center">
            <ul className="nav">
                <li className={`nav-item ${styles.item}`}>
                    <NavLink
                        activeClassName={styles.active}
                        className={`nav-link ${styles.link}`}
                        aria-current="page"
                        exact
                        to="/coctails"
                    >
                        Coctails
                    </NavLink>
                </li>
                <li className={`nav-item ${styles.item}`}>
                    <NavLink
                        className={`nav-link ${styles.link}`}
                        aria-current="page"
                        to="/users"
                        activeClassName={styles.active}
                    >
                        UserPage
                    </NavLink>
                </li>
                <li className={`nav-item ${styles.item}`}>
                    <NavLink
                        className={`nav-link ${styles.link}`}
                        aria-current="page"
                        to="/barmens"
                        activeClassName={styles.active}
                    >
                        Barmen
                    </NavLink>
                </li>
                <li className={`nav-item ${styles.item}`}>
                    <NavLink
                        className={`nav-link ${styles.link}`}
                        aria-current="page"
                        to="/news"
                        activeClassName={styles.active}
                    >
                        News
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
