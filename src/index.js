import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";

const store = configureStore({
    reducer: rootReducer
});

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById("app")
);
