import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import store from "./store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        {/* store.js 안에있는 state 모두 사용 가능 */}
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
