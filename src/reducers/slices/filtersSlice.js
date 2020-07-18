import { createSlice } from "@reduxjs/toolkit";

export const visibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

const filtersSlice = createSlice({
    name: 'visibilityFilters',
    initialState: visibilityFilters.SHOW_ALL,
    reducers: {
        setVisibilityFilter(state, action) {
            return action.payload.filter;
        }
    }
});

export const { setVisibilityFilter } = filtersSlice.actions;
export default filtersSlice.reducer;