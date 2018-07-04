import React, { Component } from "react";
import { Container, StyledInput } from "./elements";
import { Input, Button, Layout, Card, Icon } from "element-react";
import { inject, observer } from "mobx-react";

class HsLogin extends Component {
    constructor(props) {
        super(props);
    }

    login(e) {
        const { signInClicked } = this.props.signals;
        signInClicked({
            username: "admin",
            password: "admin123"
        });
    }

    render() {
        return (
            <Container>
                <Card className="box-card"
                    style={{minHeight: "200px", width: "320px"}}
                    header={
                        <div className="clearfix">
                            <span style={{ "lineHeight": "30px" }}>登录</span>
                        </div>
                    }
                >
                    <StyledInput placeholder="用户名" />
                    <StyledInput placeholder="密码" />
                    <Button style={{float: "right", margin: ".2rem"}} type={"primary"} onClick={this.login.bind(this)}>登录</Button>
                </Card>
            </Container>
        );
    }
}

export default inject("store", "signals")(observer(HsLogin));