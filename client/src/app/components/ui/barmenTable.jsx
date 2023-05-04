import React from "react";
import PropTypes from "prop-types";
import Table from "../common/table/table";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Bars from "./bars";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/users";

export const renderAvatar = () => {
    return (
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
    );
};

const BarmenTable = ({ barmens, onSort, selectedSort, onDelete }) => {
    const isLoggedIn = useSelector(getIsLoggedIn());

    const columns = {
        avatar: {
            name: "Аватар",
            component: renderAvatar
        },
        name: {
            path: "name",
            name: "Имя",
            component: (barmen) => (
                <Link to={`/barmens/${barmen._id}`}>{barmen.name}</Link>
            )
        },
        city: {
            path: "city",
            name: "Город"
        },
        bar: {
            name: "Бар",
            path: "bar.name",
            component: (barmen) => <Bars barsList={barmen.bar} />
        },
        rate: {
            path: "rate",
            name: "Рейтинг"
        },
        delete: {
            component: (barmen) =>
                isLoggedIn ? (
                    <button
                        onClick={() => onDelete(barmen._id)}
                        className="btn btn-danger"
                    >
                        удалить
                    </button>
                ) : null
        }
    };

    return (
        <Table
            data={barmens}
            columns={columns}
            onSort={onSort}
            selectedSort={selectedSort}
        />
    );
};

BarmenTable.propTypes = {
    onSort: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    barmens: PropTypes.array
};

export default BarmenTable;
