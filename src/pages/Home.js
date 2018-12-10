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
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.loaded ? (
          <div className="homePageContainer">
            <Header />
            <GroundStations />
            <Footer />
          </div>
        ) : (
          <div className="loading">
            <ReactLoading
              type="bubbles"
              color="#fff"
              height={467}
              width={175}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
