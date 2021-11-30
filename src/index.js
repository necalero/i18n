import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import JobsList from "./components/jobslist";
import localESMessages from "./locales/es";
import localENMessages from "./locales/en";


ReactDOM.render(
  <IntlProvider locale={navigator.language} messages={localESMessages}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);
