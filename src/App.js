import React from "react";
import Squirrel from "./Components/Squirrel";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squirrels: [],
      search: ""
    };
  }

  // add a componentDidMount lifecycle method to fetch data from the API
  componentDidMount() {
    let theEndpoint =
      "https://data.cityofnewyork.us/resource/vfnx-vebw.json?$$app_token=Ttmoxz1FeJQ6t4VJ5868WUhkz&running=true";
    fetch(theEndpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ squirrels: data });
      });
  }

  handlePress = (e) => {
    console.log(e.target.value);
    this.setState({ search: e.target.value.toLowerCase() });
  };

  filterSquirrels = (squirrelList) => {
    return squirrelList.filter((squirrel) => {
      console.log(squirrel);
      if (!squirrel.primary_fur_color) {
        return false;
      }
      let color_to_check = squirrel.primary_fur_color.toLowerCase();
      if (color_to_check.includes(this.state.search)) {
        return true;
      }
      return false;
    });
  };

  render() {
    let filteredSquirrels = this.filterSquirrels(this.state.squirrels);
    return (
      <div className="App">
        <h1>2018 NYC Squirrel Survey Data</h1>
        <div className="dash">
          <h2>
            Search: <input type="text" onInput={this.handlePress}></input>
          </h2>
          <p>{filteredSquirrels.length} results</p>
        </div>
        {filteredSquirrels.map((squirrel) => (
          <Squirrel sdata={squirrel} />
        ))}
      </div>
    );
  }
}

export default App;
