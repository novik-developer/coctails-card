import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { logOut } from "../store/users";

const LogOut = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logOut());
    }, []);

    return <h1>Loading!...</h1>;

    // return (
    //     <div>
    //         <a className="dropdown-item" onClick={handleLogOut}>
    //             Log out
    //         </a>
    //     </div>
    // );
};

export default LogOut;
