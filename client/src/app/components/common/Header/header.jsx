import React from "react";
import PropTypes from "prop-types";
import styles from "./header.module.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../../../images/logo/logo.png";
// import { useAuth } from "../../../hooks/useAuth";
import UserProfile from "../../ui/userProfile";
import { getIsLoggedIn } from "../../../store/users";
import { useSelector } from "react-redux";

const Header = ({ children }) => {
    const userIsLoggedIn = useSelector(getIsLoggedIn());

    const history = useHistory();
    const handleEditLogin = () => {
        history.push("/login");
    };

    const handleGoHome = () => {
        history.push("/");
    };
    // if (!currentUser) return "...LOADING!";

    return (
        <div className={styles.header}>
            <div className="btn" onClick={handleGoHome}>
                <img className={styles.logo} src={logo} alt="logo" />
            </div>
            <div className="container-fluid justify-content-center">
                {children}
            </div>
            <button className="btn">
                {userIsLoggedIn ? (
                    <UserProfile />
                ) : (
                    <div className="btn" onClick={handleEditLogin}>
                        {"Вход / регистрация"}
                    </div>
                )}
            </button>
        </div>
    );
};
Header.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Header;
