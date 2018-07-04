import React, { Component } from 'react';
import './App.css';
import { inject, observer } from "mobx-react";
import HsMainPage from "./pages";
import HsLoginPage from "./pages/login";
import "element-theme-default";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user, jwt } = this.props.store;
    if (jwt) {
      return (<HsMainPage />);
    } else {
    return (<HsLoginPage />);
    }
  }
}

export default inject("store", "signals")(observer(App));