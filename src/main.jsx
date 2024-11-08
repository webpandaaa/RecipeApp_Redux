import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RecipeContext from "../src/Context/RecipeContext.jsx";
import { store } from './store/store.jsx';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    <Provider store={store}>
        <RecipeContext>
            <App />
            <ToastContainer />
        </RecipeContext>
    </Provider>
    </BrowserRouter>
);
