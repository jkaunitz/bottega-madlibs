import React, { Component } from "react";

class Content extends Component {
  render() {
    const data = this.props.data;
    //this.this.props.data.map((object, index) => {
    //  console.log(index);
    //})
    // <span>{data.indexOf(data.color)}</span>
    return (
      <div className="card__content">
        <p>
          Ladies and gentlemen, this is <b>{data.color}</b> Barber, your sportscaster, bringing you the last inning of the game between the Cleveland <b>{data.pluralNoun}</b> and the <b>{data.adjectiveOne}</b>
        </p>
      </div>
    )
}

export default Content;