import React from "react";
import { render } from "react-dom";
import App from "./page/App";

const app = document.querySelector("#app");

if (app) {
    render(<App />, app);
}
