import React, { Component } from "react";
import ReactDom from "react-dom";

import { Grid, Row, Col, ButtonGroup, Button } from "react-bootstrap";

import "./../assets/Main.css";

import SockJsClient from "react-stomp";

class GroundStations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connectDisabled: false,
      disconnectDisabled: false,

      conversationShow: false,
      groundstations: []
    };
  }

  setConnected(connected) {
    this.setState({ connectDisabled: connected });
    this.setState({ disconnectDisabled: !connected });

    if (connected) {
      this.setState({ conversationShow: true });
    } else {
      this.setState({ conversationShow: false });
    }
    this.setState({ groundstations: [] });
  }

  connect() {
    //var socket = SockJS.createServer({ sockjs_url: '/gs-guide-websocket' });
    //console.log(socket);
    // stompClient = Stomp.over(socket);
    // stompClient.connect(
    //   {},
    //   function(frame) {
    //     setConnected(true);
    //     console.log("Connected: " + frame);
    //     stompClient.subscribe("/topic/responses", function(status) {
    //       showGreeting(JSON.parse(status.body).content);
    //     });
    //   }
    // );
  }

  send() {
    var gs = {
      id: 1,
      location: "Rome",
      url: "NA"
    };

    try {
      this.clientRef.sendMessage("/app/status", JSON.stringify(gs));
      console.log("SENT");
      return true;
    } catch (e) {
      console.log("FAILED");
      console.log(e);
      return false;
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div className="GSContainer">
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={3}>
              <ButtonGroup bsSize="large">
                <Button onClick={this.send.bind(this)}>Send</Button>
              </ButtonGroup>
            </Col>
            <SockJsClient
              url="http://localhost:8080/gs-guide-websocket"
              topics={["/topic/responses"]}
              onMessage={msg => {
                console.log(msg);
              }}
              onConnect={() => {
                this.setState({ clientConnected: true });
                console.log("Connected!");
              }}
              onDisconnect={() => {
                this.setState({ clientConnected: false });
                console.log("Disconnected!");
              }}
              ref={client => {
                this.clientRef = client;
              }}
            />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default GroundStations;
