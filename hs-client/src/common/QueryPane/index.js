import { Input } from "element-react";
import React, { Component } from "react";
import { Container } from "./elements";

export class QueryPane extends Component {
  constructor(props) {
    super(props);
  }

  onQpChanged() {
  }

  render() {
    return <Container>{this.props.children}</Container>;
  }

  getQueryParams() {

    return { param1: 100, param2: "xlm" };
  }
}
