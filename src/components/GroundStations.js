import React, { Component } from "react";

import { Grid, Row, Col } from "react-bootstrap";

import "./../assets/Main.css";
import Station from "./Station";
import "./../assets/Main.css";

import stations from "./../assets/stations";

class GroundStations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			groundstations: []
		};
	}

	renderStations() {
		const items = stations.map(s => {
			return (
				<Col key={s.ID} md={6} mdPush={6}>
					<Station station={s} />
				</Col>
			);
		});
		return items;
	}

	componentDidMount() {}

	render() {
		return (
			<div className='GSContainer'>
				<Grid>
					<Row className='show-grid'>{this.renderStations()}</Row>
				</Grid>
			</div>
		);
	}
}

export default GroundStations;
