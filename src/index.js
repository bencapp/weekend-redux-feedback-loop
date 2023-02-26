import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

// import material ui
import theme from "./components/Theme/Theme";
import { ThemeProvider } from "@mui/material";

// import redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// create form reducer
const feedback = (state = {}, action) => {
  switch (action.type) {
    case "SET_FEELING":
      return { ...state, feeling: action.payload };
    case "SET_UNDERSTANDING":
      return { ...state, understanding: action.payload };
    case "SET_SUPPORT":
      return { ...state, support: action.payload };
    case "SET_COMMENTS":
      return { ...state, comments: action.payload };
    case "CLEAR_FEEDBACK":
      return {};
  }
  return state;
};

// create store
const store = createStore(
  combineReducers({ feedback }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
