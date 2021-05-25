import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./Season";
import Spinner from "./Spinner";
class App extends React.Component {
  state = { lat: null, error: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ error: err.message })
    );
  }

  componentDidUpdate() {
    console.log();
  }

  render() {
    if (this.state.error && !this.state.lat) {
      return <div>Error Message : {this.state.error} </div>;
    }
    if (this.state.lat && !this.state.error) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
