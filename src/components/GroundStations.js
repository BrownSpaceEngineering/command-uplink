import React, { Component } from "react";

import { Grid, Row, Col } from "react-bootstrap";

import "./../assets/Main.css";
import Card from "./Card";
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
    const items = stations.map(station => {
      return (
        <Col md={6} mdPush={6}>
          <Card station={station} />
        </Col>
      );
    });
    return items;
  }

  componentDidMount() {}

  render() {
    return (
      <div className="GSContainer">
        <Grid>
          <Row className="show-grid">{this.renderStations()}</Row>
        </Grid>
      </div>
    );
  }
}

export default GroundStations;
