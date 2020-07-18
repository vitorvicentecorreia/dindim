import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DefaultProvider from "../providers/DefaultProvider";
import HomePage from "../pages/HomePage";
import NewTransaction from "../pages/NewTransaction";

export default function Router() {
	return (
		<BrowserRouter>
			<DefaultProvider>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/new-transaction" component={NewTransaction} />
				</Switch>
			</DefaultProvider>
		</BrowserRouter>
	);
}
