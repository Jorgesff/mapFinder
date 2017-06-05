import React, { Component } from 'react';
import SearchBlock from './SearchBlock';
import MapBlock from './MapBlock';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: "Entre com um CEP"
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  handleSearchChange(callback) {
    var data = [];
    data.push(callback);
    this.setState({zip: data});
  }
  render() {
    return (
      <div className="App">
        <div className="App_single-column">
          <h1>Consulta de endereço</h1>
          <SearchBlock onSearchChange={this.handleSearchChange}/>
          <MapBlock address={this.state.zip}/>
        </div>
      </div>
    );
  }
}

export default App;
