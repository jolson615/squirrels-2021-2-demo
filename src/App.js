import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  // add a componentDidMount lifecycle method to fetch data from the API

  render() {
    return (
      <div className="App">
        <h1>2018 NYC Squirrel Survey Data</h1>
      </div>
    );
  }
}

export default App;
