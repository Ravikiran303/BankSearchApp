import React, { Component } from "react";
import Banks from "./Components/Banks/Banks";
import { SeachBar } from "./Components/SearchBar/SeachBar";
import axios from "axios";
import Cities from "./Components/Cities/Cities";
import "./App.css";

class App extends Component {
  state = {
    banks: [],
    filteredBanks: [],
    loading: false
  };
  componentDidMount = () => {
    this.filterCities("BANGLORE");
  };

  filterCities = value => {
    this.setState({ loading: true });
    axios
      .get("https://vast-shore-74260.herokuapp.com/banks?city=" + `${value}`)
      .then(response => {
        const banks = response.data;
        this.setState({ banks: banks, filteredBanks: banks, loading: false });
      })

      .catch(err => {
        console.log(err);
      });
  };
  searchKeywordChange = search => {
    const filtered = this.state.banks.filter(function(bank, index, arr) {
      let {
        bank_name = "",
        state = "",
        district = "",
        city = "",
        address = "",
        branch = "",
        bank_id = "",
        ifsc = ""
      } = bank;

      return (
        bank_name.toLowerCase().includes(search.toLowerCase()) ||
        state.toLowerCase().includes(search.toLowerCase()) ||
        district.toLowerCase().includes(search.toLowerCase()) ||
        city.toLowerCase().includes(search.toLowerCase()) ||
        address.toLowerCase().includes(search.toLowerCase()) ||
        branch.toLowerCase().includes(search.toLowerCase()) ||
        ifsc.toLowerCase().includes(search.toLowerCase()) ||
        bank_id === parseInt(search)
      );
    });
    this.setState({ filteredBanks: filtered });
  };

  render() {
    return (
      <div className="App">
        <div className="filter">
          <Cities filterCities={this.filterCities} />
          <SeachBar searchKeywordChange={this.searchKeywordChange} />
        </div>
        <Banks banks={this.state.filteredBanks} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
