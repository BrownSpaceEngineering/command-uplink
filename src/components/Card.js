import React, { Component } from "react";
import { Grid, Row, Col, ButtonGroup, Button } from "react-bootstrap";

import SockJS from "sockjs-client";
var Stomp = require("stomp-websocket");

var stompClient = null;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      connected: false,
      msg: ""
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

  connect = () => {
    var socket = new SockJS("http://localhost:8080/gs-guide-websocket");
    console.log(socket);
    stompClient = Stomp.over(socket);
    stompClient.connect(
      {},
      frame => {
        console.log("Connected: " + frame);
        stompClient.subscribe("/topic/responses/" + this.props.name, status => {
          this.setState({
            connected: true,
            msg: JSON.parse(status.body).content
          });
        });
      }
    );
    this.setState({ connected: true });
  };

  handleConnection(content) {}

  disconnect = () => {
    if (stompClient !== null) {
      stompClient.disconnect();
    }
    this.setState({ connected: false });
  };

  getStatus = () => {
    var gs = {
      id: this.props.ID,
      location: this.props.name,
      url: "NA"
    };

    try {
      stompClient.send(
        "/app/status/" + this.props.name,
        {},
        JSON.stringify(gs)
      );
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="card" onClick={this.handleShow} key={this.props.item}>
          <Grid>
            <span className="station-title">{this.props.name} Station</span>

            <Row className="show-grid">
              <Col md={2} mdPull={2}>
                <div>
                  <img
                    className="station-image"
                    src={"Images/" + this.props.name + ".jpg"}
                  />
                </div>
              </Col>
              <Col md={1} mdPull={1} />
              <Col md={8} mdPull={8}>
                <div>
                  <br />
                  <span className="boldText">Information</span>
                  <p>{this.props.info}</p>
                </div>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col md={12}>
                <span className="boldText">Actions</span>
                <br />
                <ButtonGroup justified={true} bsSize="small">
                  <Button
                    bsStyle="success"
                    disabled={this.state.connected}
                    onClick={this.connect.bind(this)}
                  >
                    Connect
                  </Button>
                  <Button
                    bsStyle="danger"
                    disabled={!this.state.connected}
                    onClick={this.disconnect}
                  >
                    Disconnect
                  </Button>

                  <Button
                    bsStyle="info"
                    onClick={this.getStatus}
                    disabled={!this.state.connected}
                  >
                    Status
                  </Button>
                </ButtonGroup>
                <p className="gsData">{this.state.msg}</p>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
export default Card;
