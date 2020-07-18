import React from "react";
import FilterLink from "../containers/FilterLink";
import { visibilityFilters } from "../reducers/slices/filtersSlice";

const Footer = () => (
    <div className="row">
        <div className="col">
            <span>Show: </span>
            <FilterLink filter={visibilityFilters.SHOW_ALL}>All</FilterLink>
            {", "}
            <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
            {", "}
            <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
        </div>
    </div>
);

export default Footer;