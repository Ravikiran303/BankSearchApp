import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

export class Banks extends Component {
  render() {
    const colums = [
      {
        Header: "IFSC",
        accessor: "ifsc"
      },
      {
        Header: "BankID",
        accessor: "bank_id"
      },
      {
        Header: "Branch",
        accessor: "branch"
      },
      {
        Header: "Address",
        accessor: "address"
      },
      {
        Header: "CITY",
        accessor: "city"
      },
      {
        Header: "District",
        accessor: "district"
      },
      {
        Header: "State",
        accessor: "state"
      },
      {
        Header: "BankName",
        accessor: "bank_name"
      }
    ];
    return <ReactTable columns={colums} data={this.props.banks} />;
  }
}

export default Banks;
