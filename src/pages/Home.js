import React, { Component } from "react";

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import GroundStations from "./../components/GroundStations";
import ReactLoading from "react-loading";

import "./../assets/Main.css";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				loaded: true
			});
		}, 500);
	}

	render() {
		return (
			<div>
				{this.state.loaded ? (
					<div>
						<Header />
						<GroundStations />
						<Footer />
					</div>
				) : (
					<div className='loading'>
						<ReactLoading type='bubbles' color='#fff' height={460} width={175} />
					</div>
				)}
			</div>
		);
	}
}

export default Home;
