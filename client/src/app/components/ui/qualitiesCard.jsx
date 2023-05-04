import React, { useEffect } from "react";
import PropTypes from "prop-types";
import QualitiesList from "./qualities/qualitiesList";
import { useDispatch } from "react-redux";
import { loadQualitiesList } from "../../store/qualities";

const QualitiesCard = ({ qualities }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadQualitiesList());
    });
    return (
        <>
            <div className="card mb-3">
                <div
                    className="
                            card-body
                            d-flex
                            flex-column
                            justify-content-center
                            text-center
                        "
                >
                    <h5 className="card-title">
                        <span>Качества</span>
                    </h5>
                    <p className="card-text">
                        <QualitiesList qualitiesList={qualities} />
                    </p>
                </div>
            </div>
        </>
    );
};

QualitiesCard.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesCard;
