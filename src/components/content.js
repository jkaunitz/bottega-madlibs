import React, { Component } from "react";

class Content extends Component {
  render() {
    const data = this.props.data;
    //this.this.props.data.map((object, index) => {
    //  console.log(index);
    //})
    return (
      <p>
        Ladies and gentlemen, this is <b>{data.color}</b> Barber, your sportscaster, bringing you the last inning of the game between the Cleveland <b>{data.pluralNoun}</b> and the <b>{data.adjectiveOne}</b>
      </p>
    )
}

export default Content;