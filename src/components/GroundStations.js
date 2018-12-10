import React, { Component } from "react";

import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import "./../assets/Main.css";
import Card from "./Card";

const providenceText = "Placeholder text for info relating to the Providence groundstation."
const romeText = "Placeholder text for info relating to the Rome groundstation."

class GroundStations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groundstations: []
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="GSContainer">
        <Grid>
          <Row className="show-grid">
            <Col md={6} mdPush={6}>
              <Card name="Providence" ID={1} info={providenceText}/>
            </Col>
            <Col md={6} mdPush={6}>
              <Card name="Rome" ID={2} info={romeText}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default GroundStations;
