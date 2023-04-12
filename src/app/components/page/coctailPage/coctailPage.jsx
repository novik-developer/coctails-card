import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import PropTypes from "prop-types";
import styles from "./coctailPage.module.scss";
import Favourite from "../../common/favourite";

const CoctailPage = ({
    title,
    isFavourite,
    img,
    id,
    onToggleFavourite,
    coctails
}) => {
    return (
        <>
            {" "}
            <div className={styles.card}>
                <img src={img} alt={title} className={styles.img} />
                <Link to={`/coctails/${id}`} className={styles.title}>
                    {" "}
                    {title}
                </Link>
                <Favourite
                    className={styles.favourite}
                    isFavourite={isFavourite}
                    onClick={() => onToggleFavourite(coctails.id)}
                />
            </div>
        </>
    );
};

CoctailPage.propTypes = {
    title: PropTypes.string,
    isFavourite: PropTypes.bool,
    img: PropTypes.string,
    id: PropTypes.number,
    onToggleFavourite: PropTypes.func,
    coctails: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default CoctailPage;
