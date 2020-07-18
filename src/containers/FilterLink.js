import React from "react";
import { setVisibilityFilter } from "../reducers/slices/filtersSlice";
import Link from "../components/Link";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter == state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter({filter: ownProps.filter}))
});

// const mapDispatchToProps = { setVisibilityFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Link);