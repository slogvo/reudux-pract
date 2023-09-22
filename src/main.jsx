import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
// import store from "./redux-toolkit/configureStore.js";
import { CountProvider } from "./context/count-context.jsx";
import store from "./redux-core/configureStore.js";
// import store from "./redux/configureStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <CountProvider>
        <App />
      </CountProvider>
    </Provider>
  </React.StrictMode>
);
