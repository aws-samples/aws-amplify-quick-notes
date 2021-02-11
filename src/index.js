import React from "react";
import ReactDOM from "react-dom";
import Amplify from "aws-amplify";
import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";

import App from "./App";
import "normalize.css/normalize.css";
import "./index.css";
import amplifyConfig from "./aws-exports";

Amplify.configure(amplifyConfig);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

ReactDOM.render(<App />, document.getElementById("root"));

