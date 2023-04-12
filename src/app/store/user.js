import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import history from "../utils/history";

console.log(history);

const initialState = {
    email: null,
    token: null,
    id: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser: (state) => {
            state.email = null;
            state.token = null;
            state.id = null;
        }
    }
});

const { reducer: userReducer, actions } = userSlice;

export const { setUser, removeUser } = actions;
// console.log(setUser);
// console.log(removeUser);

// вход
export const logIn = (data) => (dispatch) => {
    const { email, password } = data;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
            dispatch(
                setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                })
            );
            console.log(history);
            history.push("/");
        })
        .catch(console.error);
};

// регистрация
export const signUp = (data) => (dispatch) => {
    const { email, password } = data;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
            dispatch(
                setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                })
            );
            history.push("/");
        })
        .catch(console.error);
};

export const logOut = () => (dispatch) => {
    dispatch(removeUser());
    history.push("/");
};

// actions

export const getUsersList = () => (state) => state.user;

export default userReducer;
