import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../Cities/Cities.css";

export class Cities extends Component {
  state = {
    value: "MUMBAI"
  };
  render() {
    const cities = [
      "MUMBAI",
      "BANGLORE",
      "HYDERABAD",
      "CHENNAI",
      "GREATER MUMBAI"
    ];
    return (
      <div className="dropdown">
        <Dropdown
          value={this.state.value}
          options={cities}
          onChange={e => {
            this.setState({ value: e.value });
            this.props.filterCities(e.value);
          }}
          placeholder="Select City"
        />
      </div>
    );
  }
}

export default Cities;
