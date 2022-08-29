import React from "react";
import { ListView } from "./list";

export class ContainerView extends React.Component {
  constructor() {
    super();
    this.state = {
      food: ["momo", "chowmein"],
    };
  }
  render() {
    return this.state.food.map((food) => {
      return <ListView text={food} />;
    });
  }
}
