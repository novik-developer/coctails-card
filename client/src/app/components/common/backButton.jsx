import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BackButton = () => {
    const history = useHistory();
    return (
        <button onClick={() => history.goBack()} className="btn btn-primary ">
            <i className="bi bi-caret-left"></i>
            Назад
        </button>
    );
};

export default BackButton;
