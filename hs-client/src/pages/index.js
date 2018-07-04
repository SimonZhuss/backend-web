import React, { Component } from "react";
import SplitterLayout from "react-splitter-layout";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./router";
import { Content, Page } from "./content/elements";
import HsHeader from "./header";
import HsSider from "./sider";
import { inject, observer } from "mobx-react";
import { Message } from "element-react";

class HsMainPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Message({
      message: '登录成功.',
      type: 'success'
    });
  }

  render() {
    return (
      <Content>
        <HsHeader />
        <SplitterLayout
          primaryIndex={0}
          primaryMinSize={10}
          secondaryInitialSize={85}
          percentage
        >
          <HsSider />
          <Switch>
            {ROUTES.map((r, idx) => {
              return (
                <Route
                  exact
                  path={r.path}
                  render={props => <Page>{<r.component/>}</Page>}
                  key={`_router_${idx}`}
                />
              );
            })}
          </Switch>
        </SplitterLayout>
      </Content>
    );
  }
}
export default inject("store", "signals")(observer(HsMainPage));
