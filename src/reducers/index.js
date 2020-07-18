import { combineReducers } from 'redux';
import todosReducer from "./slices/todosSlice";
import visibilityFilterReducer from "./slices/filtersSlice";

export default combineReducers({
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer
});