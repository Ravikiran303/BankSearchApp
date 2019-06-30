import React, { Component } from "react";
import ReactTable from "react-table";
import axios from "axios";
import "react-table/react-table.css";

export class Banks extends Component {
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
    return <ReactTable columns={colums} data={this.state.banks} />;
  }
}

export default Banks;
