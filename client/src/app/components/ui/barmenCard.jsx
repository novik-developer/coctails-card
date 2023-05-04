import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Bars from "./bars";
import { getIsLoggedIn } from "../../store/users";
import { useSelector } from "react-redux";

const BarmenCard = ({ barmen }) => {
    const isLoggedIn = useSelector(getIsLoggedIn());

    const history = useHistory();

    const handleEditPage = () => {
        history.push(history.location.pathname + "/edit");
    };
    return (
        <>
            {" "}
            {barmen && (
                <div className="card mb-3">
                    <div className="card-body">
                        {isLoggedIn ? (
                            <button
                                onClick={handleEditPage}
                                className="
                                  position-absolute
                                  top-0
                                  end-0
                                  btn btn-light btn-sm
                              "
                            >
                                <i className="bi bi-gear"></i>
                            </button>
                        ) : null}
                        <div
                            className="
                                  d-flex
                                  flex-column
                                  align-items-center
                                  text-center
                                  position-relative
                              "
                        >
                            <img
                                src={`https://avatars.dicebear.com/api/avataaars/${(
                                    Math.random() + 1
                                )
                                    .toString(36)
                                    .substring(7)}.svg`}
                                className="rounded-circle shadow-1-strong me-3"
                                alt="avatar"
                                width="65"
                                height="65"
                            />
                            <div className="mt-3">
                                <h4>{barmen.name}</h4>
                                <p className="text-secondary mb-1"></p>
                                <div className="text-muted">
                                    <i
                                        className="
                                              bi bi-caret-down-fill
                                              text-primary
                                          "
                                        role="button"
                                    ></i>
                                    <i
                                        className="
                                              bi bi-caret-up
                                              text-secondary
                                          "
                                        role="button"
                                    ></i>
                                    <span className="ms-2">{barmen.rate}</span>
                                </div>
                            </div>
                            <h3>Бар</h3>
                            <Bars barsList={barmen.bar} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

BarmenCard.propTypes = {
    barmen: PropTypes.object
};

export default BarmenCard;
