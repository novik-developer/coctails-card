import React from "react";
import PropTypes from "prop-types";

const Bars = ({ barsList }) => {
    return <p className="btn btn-outline-secondary btn-sm"> {barsList.name}</p>;
};

Bars.propTypes = {
    barsList: PropTypes.object
};

export default Bars;
