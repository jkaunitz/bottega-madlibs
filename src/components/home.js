import React, { Component } from "react";

import Header from "./header";
import Card from "./card";

class Home extends Component {
  render() {
    return (
      <div className="home">
        {Header()}
        <Card />
      </div>
    );
  }
}

// things we need to fixs
// content labels
// generate btn space/card-height

export default Home;
