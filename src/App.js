import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BankDetails from "./Components/BankDetails/BankDetails";
import BankDashboard from "./Components/BankDashboard/BankDashboard";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={BankDashboard} />
            <Route exact path="/BankDetails/:id" component={BankDetails} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
