import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
  }

  greetParent = (childName) => {
    alert(`Hi ${this.state.parentName} from ${childName}`)
  };

  render() {
    return <div>
        <Child greetHandler={this.greetParent}/>
    </div>;
  }
}

export default Parent;
