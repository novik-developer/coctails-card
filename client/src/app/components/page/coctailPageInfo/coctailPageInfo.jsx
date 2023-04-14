import React, { useEffect, useMemo, useState } from "react";
import { Spinner } from "react-bootstrap";
import PropTypes from "prop-types";
import API from "../../../api";
import BackButton from "../../common/backButton";

const CoctailPageInfo = ({ coctalId }) => {
    const cocId = +coctalId;

    const [coctails, setCoctails] = useState([]);

    useEffect(() => {
        API.coctails.fetchAll().then((data) => {
            setCoctails(data);
        });
    }, []);

    const foundCoctail = useMemo(() => {
        return coctails.find((coctail) => coctail.id === cocId);
    }, [coctalId, coctails]);

    return (
        <>
            {foundCoctail ? (
                <div>
                    <BackButton />
                    <div className="d-flex justify-content-between align-items-center mt-2 ">
                        <img
                            src={foundCoctail.imgUrl}
                            alt={foundCoctail.title}
                            className="object-fit-cover border rounded w-25 p-3 "
                        />
                        <p className="w-75 ms-5">{foundCoctail.recipe.text}</p>
                    </div>
                </div>
            ) : (
                <Spinner />
            )}
        </>
    );
};

CoctailPageInfo.propTypes = {
    coctalId: PropTypes.string
};
export default CoctailPageInfo;
