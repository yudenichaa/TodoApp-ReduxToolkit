import React from "react";
import { toggleTodo } from "../reducers/slices/todosSlice";
import TodoList from "../components/TodoList";
import { connect } from "react-redux";
import { visibilityFilters } from "../reducers/slices/filtersSlice";
import { createSelector } from '@reduxjs/toolkit';

const selectTodos = state => state.todos;
const selectFilter = state => state.visibilityFilter;
const selectVisibleTodos = createSelector(
    [selectTodos, selectFilter],
    (todos, filter) => {
        switch (filter) {
            case visibilityFilters.SHOW_ALL:
                return todos;
            case visibilityFilters.SHOW_COMPLETED:
                return todos.filter(t => t.completed);
            case visibilityFilters.SHOW_ACTIVE:
                return todos.filter(t => !t.completed);
            default:
                throw new Error("Unknown filter: " + filter);
        }
    }
)

const mapStateToProps = (state) => ({
    todos: selectVisibleTodos(state)
});

const mapDispatchToProps = { toggleTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);