import React, { Component } from "react";
import "../SearchBar/SearchBar.css";

export class SeachBar extends Component {
  render() {
    return (
      <div className="container">
        <input
          type="text"
          className="input"
          placeholder="Search Here.."
          onChange={e => {
            const search = e.target.value;
            this.props.searchKeywordChange(search);
          }}
        />
      </div>
    );
  }
}
