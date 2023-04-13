import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../api";
import { Spinner } from "react-bootstrap";

const BarsContext = React.createContext();

export const useBars = () => {
    return useContext(BarsContext);
};

const BarsProvider = ({ children }) => {
    const [bars, setBars] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        API.bars.fetchAll().then((data) => {
            if (typeof data === "object") {
                const dataArr = Object.keys(data).map((key) => {
                    return data[key];
                });
                setBars(dataArr);
                setLoading(true);
            } else {
                setBars(data);
                setLoading(true);
            }
        });
    }, []);

    return (
        <BarsContext.Provider value={{ bars, isLoading }}>
            {isLoading ? children : <Spinner />}
        </BarsContext.Provider>
    );
};

BarsProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default BarsProvider;
