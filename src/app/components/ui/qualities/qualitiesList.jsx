import React from "react";
import PropTypes from "prop-types";
import Qualitie from "./qualitie";

const QualitiesList = ({ qualitiesList }) => {
    console.log("qualities", qualitiesList);
    return (
        <>
            {qualitiesList.map((qual) => (
                <Qualitie key={qual._id} {...qual} />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualitiesList: PropTypes.array
};
export default QualitiesList;
