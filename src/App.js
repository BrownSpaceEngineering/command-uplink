import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import PageNotFound from "./pages/404";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='*' component={PageNotFound} />
				</Switch>
			</div>
		);
	}
}

export default App;
