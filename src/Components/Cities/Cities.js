import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../Cities/Cities.css";

export class Cities extends Component {
  render() {
    const cities = [
      "MUMBAI",
      "BANGLORE",
      "HYDERABAD",
      "MAHARASTRA",
      "GREATER MUMBAI"
    ];
    return (
      <div className="dropdown">
        <Dropdown
          options={cities}
          onChange={e => {
            this.props.filterCities(e);
          }}
          placeholder="Select City"
        />
      </div>
    );
  }
}

export default Cities;
