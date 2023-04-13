import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { logger } from "./middleware/logger";
import userReducer from "./user";

const rootReducer = combineReducers({
    user: userReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(logger)
    });
}
