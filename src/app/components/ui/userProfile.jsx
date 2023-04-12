import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUsersList } from "../../store/user";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import { useAuth } from "../../hooks/useAuth";
import LogOut from "../../layouts/logOut";
// import LogOut from "../../layouts/logOut";

const UserPrifile = () => {
    // const dispatch = useDispatch();
    const { isAuth, email } = useAuth();
    console.log(isAuth, email);
    const [isOpen, setOpen] = useState(false);

    const user = useSelector(getUsersList());
    console.log(user);

    const toggleMenu = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div className="dropdown" onClick={toggleMenu}>
            <div className="btn dropdown-toggle d-flex align-items-center">
                <div className="me-2">PROFILE</div>
                <img
                    src={`https://avatars.dicebear.com/api/avataaars/${(
                        Math.random() + 1
                    )
                        .toString(36)
                        .substring(7)}.svg`}
                    alt="avatar"
                    height="40"
                    className="img-responsive rounded-circle"
                />
            </div>
            <div className={"w-100 dropdown-menu" + (isOpen ? "show" : "")}>
                <div className="dropdown-item">
                    <LogOut />
                </div>
            </div>
        </div>
    );
};

export default UserPrifile;
