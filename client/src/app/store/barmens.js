import { createAction, createSlice } from "@reduxjs/toolkit";
import barmensService from "../services/barmens.service";

const barmensSlice = createSlice({
    name: "barmens",
    initialState: {
        entities: null, // null
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        barmensRequested: (state) => {
            state.isLoading = true;
        },
        barmensReseved: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
            state.lastFetch = Date.now();
        },
        barmensRequestedField: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        barmenUpdated: (state, action) => {
            state.entities = state.entities.map((user) =>
                user._id === action.payload._id ? action.payload : user
            );
        }
    }
});

const barmenUpdateRequested = createAction("barmens/userUpdateRequested");
const barmenUpdateFailed = createAction("barmens/userUpdateFailed");

const { reducer: barmensReducer, actions } = barmensSlice;
const {
    barmenUpdated,
    barmensRequested,
    barmensReseved,
    barmensRequestedField
} = actions;

function isOutDated(date) {
    if (Date.now() - date > 10 * 60 * 1000) {
        return true;
    }
    return false;
}

export const updateData = (payload) => async (dispatch) => {
    dispatch(barmenUpdateRequested());
    try {
        const { content } = await barmensService.updateBarmenData(payload);
        dispatch(barmenUpdated(content));
        history.push(`/barmens/${content._id}`);
    } catch (error) {
        dispatch(barmenUpdateFailed(error.message));
    }
};

export const loadBarmenIdList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().barmens;
    if (isOutDated(lastFetch)) {
        dispatch(barmensRequested());
        try {
            const { content } = await barmensService.get();
            dispatch(barmensReseved(content));
        } catch (error) {
            console.log("error", error);
            dispatch(barmensRequestedField(error.message));
        }
    }
};
export const getCurrentBarmenData = () => (state) => {
    return state.barmens.entities
        ? state.barmens.entities.find(
              (b) => b._id === state.barmen.auth.barmenId
          )
        : null;
};
export const getBarmensList = () => (state) => state.barmens.entities;
export const getBarmensLoadingStatus = () => (state) => state.barmens.isLoading;

export const getBarmenByids = (barmenId) => (state) => {
    if (state.barmens.entities) {
        return state.barmens.entities.find((p) => p._id === barmenId);
    }
};

export default barmensReducer;
