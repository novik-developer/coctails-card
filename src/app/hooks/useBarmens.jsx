import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../api";
import { Spinner } from "react-bootstrap";
import _ from "lodash";

const BarmenContext = React.createContext();

export const useBarmen = () => {
    return useContext(BarmenContext);
};

const BarmenProvider = ({ children }) => {
    const [barmens, setBarmens] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" }); // asc,desc

    const sortedBarmens = _.orderBy(barmens, [sortBy.path], [sortBy.order]); // asc,desc

    const getSortedBarmens = (item) => {
        setSortBy(item);
    };

    useEffect(() => {
        setLoading(false);
        API.barmens.fetchAll().then((data) => {
            setBarmens(data);
            setLoading(true);
        });
    }, []);

    function getUserById(barmenId) {
        return barmens.find((barmen) => barmen._id === barmenId);
    }

    const getBarmensId = (id) => {
        setBarmens(barmens.filter((barmen) => barmen._id !== id));
    };

    return (
        <BarmenContext.Provider
            value={{
                barmens,
                getBarmensId,
                getSortedBarmens,
                sortedBarmens,
                sortBy,
                getUserById
            }}
        >
            {isLoading ? children : <Spinner />}
        </BarmenContext.Provider>
    );
};

BarmenProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default BarmenProvider;
