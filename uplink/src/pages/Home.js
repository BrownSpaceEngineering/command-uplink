import React, { Component } from "react";

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import GroundStations from "./../components/GroundStations";

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
    }, 300);
  }

  render() {
    return (
      <div className="homePage">
        {this.state.loaded ? (
          <div className="homePageContainer">
            <Header />
            <GroundStations />
            <Footer />
          </div>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
    );
  }
}

export default Home;
