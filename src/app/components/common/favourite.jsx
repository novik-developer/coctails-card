import React from "react";
import PropTypes from "prop-types";

const Favourite = ({ isFavourite, ...rest }) => {
    return (
        <button {...rest}>
            <i className={"bi bi-heart" + (isFavourite ? "-fill" : "")}></i>
        </button>
    );
};

Favourite.propTypes = {
    isFavourite: PropTypes.bool
};

export default Favourite;
