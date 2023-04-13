import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import styles from "./footer.module.scss";
import logo from "../../../../images/logo/logo.png";
import logoInsta from "../../../../images/logo/logo-insta.jpeg";
import logoVk from "../../../../images/logo/logo-vk.jpeg";
import logoGithub from "../../../../images/logo/logo-github.jpeg";

const Footer = () => {
    const history = useHistory();
    const handleGoHome = () => {
        history.push("/");
    };
    return (
        <div className={styles.footer__container}>
            {" "}
            <div className={styles.footer}>
                <div className={styles.footer__images}>
                    {" "}
                    <img
                        className={styles.logo}
                        src={logoInsta}
                        alt="logo_insta"
                    />
                    <img className={styles.logo} src={logoVk} alt="logo_vk" />
                    <img
                        className={styles.logo}
                        src={logoGithub}
                        alt="logo_github"
                    />
                </div>
                <div className="btn" onClick={handleGoHome}>
                    <img
                        className={styles.logo__footer}
                        src={logo}
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
