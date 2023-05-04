import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { logger } from "./middleware/logger";
import usersReducer from "./users";
import qualitiesReducer from "./qualities";
import professionsReducer from "./profession";
import barmensReducer from "./barmens";

const rootReducer = combineReducers({
    users: usersReducer,
    qualities: qualitiesReducer,
    professions: professionsReducer,
    barmens: barmensReducer
    // user: userReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
        // middleware: (getDefaultMiddleware) =>
        //     getDefaultMiddleware().concat(logger)
    });
}
