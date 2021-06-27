import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/bootstrap.min.css";
import "react-quill/dist/quill.snow.css";
import "swiper/swiper-bundle.min.css";
import "./assets/css/main.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);

serviceWorkerRegistration.unregister();
