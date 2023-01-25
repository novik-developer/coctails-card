import React from "react";
import PropTypes from "prop-types";
import styles from "./header.module.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../../../images/logo/logo.png";

const Header = ({ children }) => {
    const history = useHistory();
    const handleEditLogin = () => {
        history.push("/login");
    };

    const handleGoHome = () => {
        history.push("/");
    };
    return (
        <div className={styles.header}>
            <div className="btn" onClick={handleGoHome}>
                <img className={styles.logo} src={logo} alt="logo" />
            </div>
            <div className="container-fluid justify-content-center">
                {children}
            </div>
            <button className="btn" onClick={handleEditLogin}>
                Вход/регистрация
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
