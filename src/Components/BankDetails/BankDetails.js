import React, { Component } from "react";
import "../BankDetails/BankDetails.css";

export class BankDetails extends Component {
  render() {
    const bank = this.props.location.state.data;
    return (
      <div className="details">
        <div className="item">
          <label>BankID </label>
          <label>{bank.bank_id}</label>
        </div>
        <div className="item">
          <label>BankName </label>
          <label>{bank.bank_name}</label>
        </div>
        <div className="item">
          <label>Branch </label>
          <label>{bank.branch}</label>
        </div>
        <div className="item">
          <label>State </label>
          <label>{bank.state}</label>
        </div>
        <div className="item">
          <label>City </label>
          <label>{bank.city}</label>
        </div>
        <div className="item">
          <label>District </label>
          <label>{bank.district}</label>
        </div>
      </div>
    );
  }
}

export default BankDetails;
