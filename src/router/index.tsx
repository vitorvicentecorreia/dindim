import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DefaultProvider from "../providers/DefaultProvider";
import HomePage from "../pages/HomePage";

export default function Router() {
	return (
		<BrowserRouter>
			<DefaultProvider>
				<Switch>
					<Route exact path="/" component={HomePage} />
				</Switch>
			</DefaultProvider>
		</BrowserRouter>
	);
}
