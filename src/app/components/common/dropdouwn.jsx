import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";

const Dropdouwn = ({ children }) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
                {children}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item>Город</Dropdown.Item>
                <Dropdown.Item>список два</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

Dropdouwn.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Dropdouwn;
