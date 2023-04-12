import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ columns, onSort, selectedSort }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };
    const renderCaret = (item) => {
        if (item === selectedSort.path && selectedSort.path) {
            const caret =
                selectedSort.order === "asc"
                    ? "bi bi-caret-down-fill"
                    : "bi bi-caret-up-fill";
            return caret;
        }
    };

    return (
        <thead className="thead-dark">
            <tr>
                {Object.keys(columns).map((col) => (
                    <th
                        className={renderCaret(columns[col].path)}
                        onClick={
                            columns[col].path
                                ? () => handleSort(columns[col].path)
                                : undefined
                        }
                        {...{ role: columns[col].path && "button" }}
                        scope="col"
                        key={col}
                    >
                        {columns[col].name}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object
};
export default TableHeader;
