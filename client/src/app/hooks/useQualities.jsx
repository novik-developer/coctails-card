import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../api";

const QualityContext = React.createContext();

export const useQualities = () => {
    return useContext(QualityContext);
};

export const QualitiesProvaider = ({ children }) => {
    const [qualities, setQualities] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // API.qualities.fetchAll().then((data) => {
        //     setQualities(data);
        // });
        getQualitysList();
    }, []);

    // полуяение качеств
    const getQuality = (id) => {
        return qualities.find((q) => q._id === id);
    };

    async function getQualitysList() {
        try {
            const content = await API.qualities.fetchAll();
            setQualities(content);
            setLoading(false);
        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        <QualityContext.Provider value={{ isLoading, qualities, getQuality }}>
            {children}
        </QualityContext.Provider>
    );
};

QualitiesProvaider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
