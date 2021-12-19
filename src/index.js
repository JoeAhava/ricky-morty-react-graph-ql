import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "./context";

document.body.style.margin = 0;
document.body.style.padding = 0;

ReactDOM.render(
	<React.StrictMode>
		<Provider value={{ dark: false }}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
