import React, { Component } from "react";
import { Grid, Row, Col, ButtonGroup, Button } from "react-bootstrap";

import SockJS from "sockjs-client";
var Stomp = require("stomp-websocket");

class Station extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			connected: false,
			msg: "",
			stompClient: null
		};

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	connect = async () => {
		var socket = new SockJS("http://localhost:8080/gs-guide-websocket");

		await this.setState({ stompClient: Stomp.over(socket) });
		this.state.stompClient.connect(
			{},
			frame => {
				console.log("Connected!");
				this.state.stompClient.subscribe(
					"/topic/responses/" + this.props.station.location,
					status => {
						this.setState({
							connected: true,
							msg: JSON.parse(status.body).content
						});
					}
				);
			}
		);
		this.setState({ connected: true });
	};

	disconnect = async () => {
		if (this.state.stompClient !== null) {
			await this.state.stompClient.disconnect();
		}
		this.setState({ connected: false });
	};

	getStatus = async () => {
		var gs = {
			id: this.props.station.ID,
			location: this.props.station.location,
			url: "NA"
		};

		try {
			await this.state.stompClient.send(
				"/app/status/" + this.props.station.location,
				{},
				JSON.stringify(gs)
			);
		} catch (e) {
			console.log(e);
		}
	};

	componentDidMount() {}

	render() {
		return (
			<div>
				<div className='card' onClick={this.handleShow}>
					<Grid>
						<span className='station-title'>{this.props.station.name}</span>

						<Row className='show-grid'>
							<Col md={2} mdPull={2}>
								<div>
									<img
										alt=''
										className='station-image'
										src={"Images/" + this.props.station.location + ".jpg"}
									/>
								</div>
							</Col>
							<Col md={1} mdPull={1} />
							<Col md={8} mdPull={8}>
								<div>
									<br />
									<span className='boldText'>Information</span>
									<p>{this.props.station.info}</p>
									<p>
										<span className='boldText'>Affiliation: </span>
										{this.props.station.affiliation}
										<br />
										<span className='boldText'>Address: </span>
										{this.props.station.address}
									</p>
								</div>
							</Col>
						</Row>
						<Row className='show-grid'>
							<Col md={12}>
								<span className='boldText'>Actions</span>
								<br />
								<ButtonGroup justified={true} bsSize='small'>
									<Button bsStyle='success' disabled={this.state.connected} onClick={this.connect}>
										Connect
									</Button>
									<Button
										bsStyle='danger'
										disabled={!this.state.connected}
										onClick={this.disconnect}>
										Disconnect
									</Button>

									<Button bsStyle='info' onClick={this.getStatus} disabled={!this.state.connected}>
										Status
									</Button>
								</ButtonGroup>
								<br/><br/>
								<span className='boldText'>{this.props.station.location} Status</span>
								<p className='gsData'>{this.state.msg}</p>
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		);
	}
}
export default Station;
