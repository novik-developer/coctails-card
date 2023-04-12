import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import API from "../api";
import { Spinner } from "react-bootstrap";

const CoctailsContext = React.createContext();

export const useCoctails = () => {
    return useContext(CoctailsContext);
};

const CoctailsProvider = ({ children }) => {
    const [coctails, setCoctails] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        API.coctails.fetchAll().then((data) => setCoctails(data));
        setLoading(true);
    }, []);

    const getFavouriteCoctail = (coctailId) => {
        const newArryCoctail = coctails.map((coctail) => {
            if (coctail.id === coctailId) {
                return { ...coctail, isFavourite: !coctail.isFavourite };
            }
            return coctail;
        });
        setCoctails(newArryCoctail);
    };

    const sortedCoctails = _.orderBy(coctails, ["isFavourite"], ["desc"]);

    const sortedNoAlcCoctails = _.orderBy(coctails, ["isAlc"], ["desc"]);

    const getSortedCoctails = () => {
        setCoctails(sortedCoctails);
    };

    const getSortedNoalcCoctails = () => {
        setCoctails(sortedNoAlcCoctails);
    };

    return (
        <CoctailsContext.Provider
            value={{
                coctails,
                getFavouriteCoctail,
                getSortedCoctails,
                getSortedNoalcCoctails
            }}
        >
            {isLoading ? children : <Spinner />}
        </CoctailsContext.Provider>
    );
};

CoctailsProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default CoctailsProvider;
