import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Panier from "./panier";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<Router basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route exact path="/">
					<Panier motif="accueil" />
				</Route>
				<Route exact path="/boutique">
					<Panier motif="boutique" />
				</Route>
				<Route exact path="/contact">
					<Panier motif="contact" />
				</Route>
				<Route exact path={`/boutique/:titreArticle`}>
					<Panier motif="produit" />
				</Route>
				<Route exact path="/a_propos">
					<Panier motif="a_propos" />
				</Route>
				<Route exact path="*">
					<Panier motif="accueil" />
				</Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
