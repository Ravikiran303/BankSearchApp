import React, { Component } from "react";
const ls = require("local-storage");

export class FavoriteIcon extends Component {
  state = {
    favoriteIcon: ls.get(this.props.Bank_ifsc)
      ? "star icon"
      : "star outline icon"
  };

  render() {
    return (
      <div>
        <i
          className={this.state.favoriteIcon}
          onClick={e => {
            this.setState(prevState => {
              if (prevState.favoriteIcon === "star icon") {
                ls.remove(this.props.Bank_ifsc, false);
                return { favoriteIcon: "star outline icon" };
              }
              ls.set(this.props.Bank_ifsc, true);
              return { favoriteIcon: "star icon" };
            });
          }}
        />
      </div>
    );
  }
}

export default FavoriteIcon;
