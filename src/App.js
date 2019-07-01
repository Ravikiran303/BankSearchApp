import React, { Component } from "react";
import Banks from "./Components/Banks/Banks";
import { SeachBar } from "./Components/SearchBar/SeachBar";
import axios from "axios";

class App extends Component {
  state = {
    banks: []
  };
  componentDidMount() {
    axios
      .get("https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI")
      .then(response => {
        const banks = response.data;
        this.setState({ banks });
      })
      .catch(err => {
        console.log(err);
      });
  }
  searchKeywordChange = search => {
    const filtered = this.state.banks.filter(bank => bank === search);
    this.setState({ banks: filtered });
    console.log(filtered);
  };
  render() {
    return (
      <div className="App">
        <SeachBar searchKeywordChange={this.searchKeywordChange} />
        <Banks />
      </div>
    );
  }
}

export default App;
