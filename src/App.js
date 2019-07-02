import React, { Component } from "react";
import Banks from "./Components/Banks/Banks";
import { SeachBar } from "./Components/SearchBar/SeachBar";
import Cities from "./Components/Cities/Cities";
import "./App.css";

class App extends Component {
  state = {
    banks: [],
    filteredBanks: [],
    loading: false
  };
  componentDidMount = async () => {
    await this.filterCities("MUMBAI");
  };

  fetchData = async value => {
    const cacheName = "my-website-cache";
    const response = await fetch(
      "https://vast-shore-74260.herokuapp.com/banks?city=" + `${value}`
    );
    const data = await response;
    const cache = await caches.open(cacheName);
    return cache.put(value, data);
  };

  getDataFromCache = async value => {
    this.setState({ loading: true });
    const cacheName = "my-website-cache";
    const cache = await caches.open(cacheName);
    return await cache.match(value);
  };

  saveData = async banks => {
    const data = await banks.json();

    this.setState({
      filteredBanks: data,
      loading: false,
      banks: data
    });
  };

  filterCities = async value => {
    this.setState({ loading: true, filteredBanks: [] });
    const bank = await this.getDataFromCache(value);

    if (bank) {
      await this.saveData(bank);
      await this.fetchData(value);
    } else {
      await this.fetchData(value);
      const bank = await this.getDataFromCache(value);
      await this.saveData(bank);
    }
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
