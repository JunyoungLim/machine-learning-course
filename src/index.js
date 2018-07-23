import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, HashRouter, Route } from "react-router-dom";

import indexRoutes from "routes/index.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

ReactDOM.render(
  <BrowserRouter basename={"machine-learning-course"}>
    <div>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
