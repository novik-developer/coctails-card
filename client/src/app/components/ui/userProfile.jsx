import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { getCurrentUserData, loadUsersList } from "../../store/users";

const UserProfile = () => {
    const [isOpen, setOpen] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsersList());
    }, []);

    const currentUser = useSelector(getCurrentUserData());

    const toggleMenu = () => {
        setOpen((prev) => !prev);
    };
    if (!currentUser) return "Loading...";
    return (
        <div className="dropdown" onClick={toggleMenu}>
            <div className="btn dropdown-toggle d-flex align-items-center">
                <div className="me-2">{currentUser.name}</div>
                <img
                    src={currentUser.image}
                    alt="avatar"
                    height="40"
                    className="img-responsive rounded-circle"
                />
            </div>
            <div className={"w-100 dropdown-menu" + (isOpen ? "show" : "")}>
                <Link
                    to={`/users/${currentUser._id}`}
                    className="dropdown-item"
                >
                    Profile
                </Link>
                <Link to="/logout" className="dropdown-item">
                    Log out
                </Link>
            </div>
        </div>
    );
};

export default UserProfile;
