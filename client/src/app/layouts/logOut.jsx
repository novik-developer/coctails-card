import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeUser } from "../store/user";

const LogOut = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        history.push("/");
    }, []);

    // const handleLogOut = () => {
    //     useEffect(() => {
    //         dispatch(removeUser());
    //         history.push("/");
    //     }, []);
    // };
    const handleLogOut = () => {
        dispatch(removeUser());
        history.push("/");
    };

    return (
        <div>
            <a className="dropdown-item" onClick={handleLogOut}>
                Log out
            </a>
        </div>
    );
};

export default LogOut;
