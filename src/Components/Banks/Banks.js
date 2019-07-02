import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import FavoriteIcon from "../Favorite/FavoriteIcon";

export class Banks extends Component {
  colums = [
    {
      Header: "Favorite",
      accessor: "favorite",
      Cell: props => {
        console.log(props.original.ifsc);
        return <FavoriteIcon Bank_ifsc={props.original.ifsc} />;
      }
    },
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

  render() {
    return (
      <ReactTable
        minRows={10}
        defaultPageSize={10}
        columns={this.colums}
        data={this.props.banks}
        loading={this.props.loading}
      />
    );
  }
}

export default Banks;
