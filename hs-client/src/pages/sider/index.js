import React, { Component } from "react";
import { Menu, Layout } from "element-react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { faUser, faCreditCard, faUserEdit, faMoneyCheck } from "@fortawesome/fontawesome-free-solid";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
class HsSider extends Component {
  constructor(props) {
    super(props);
  }

  onOpen = () => {};
  onClose = () => {};

  render() {
    return (
      <Layout.Row className="tac">
        <Layout.Col span={24}>
          <Menu
            defaultActive="2"
            className="el-menu-vertical-demo"
            onOpen={this.onOpen.bind(this)}
            onClose={this.onClose.bind(this)}
            theme="light"
          >
            <Menu.SubMenu index="1" title={<span className={"el-icon"}><FontAwesomeIcon icon={faUser}/><span style={{margin: "0.5rem"}}>用户管理</span></span>} >
              <Menu.ItemGroup title="分组一">
                <Menu.Item index="1-1">
                  <Link to="/user/userInfoQuery">用户/企业资料查询</Link>
                </Menu.Item>
                <Menu.Item index="1-2">选项2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="分组2">
                <Menu.Item index="1-3">选项3</Menu.Item>
              </Menu.ItemGroup>
            </Menu.SubMenu>
            <Menu.SubMenu index="2" title={<span className={"el-icon"}><FontAwesomeIcon icon={faCreditCard}/><span style={{margin: "0.5rem"}}>授信管理</span></span>}>
                <Menu.Item index="2-1">
                  <Link to="/user/userInfoQuery">用户授信管理</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu index="3" title={<span className={"el-icon"}><FontAwesomeIcon icon={faUserEdit}/><span style={{margin: "0.5rem"}}>订单管理</span></span>}>
                <Menu.Item index="3-1">
                  <Link to="/user/userCredit">尽调管理</Link>
                </Menu.Item>
                <Menu.Item index="3-2">
                  <Link to="/user/userCredit">授信项下订单管理</Link>
                </Menu.Item>
                <Menu.Item index="3-2">
                  <Link to="/user/userCredit">授信项下订单提款管理</Link>
                </Menu.Item>
                <Menu.Item index="3-2">
                  <Link to="/user/userCredit">非授信订单管理</Link>
                </Menu.Item>
                <Menu.Item index="3-2">
                  <Link to="/user/userCredit">非授信订单提款管理</Link>
                </Menu.Item>
                <Menu.Item index="3-2">
                  <Link to="/user/userCredit">授信项下订单管理</Link>
                </Menu.Item>
                <Menu.Item index="3-2">
                  <Link to="/user/userCredit">订单审批</Link>
                </Menu.Item>
                <Menu.Item index="3-2">
                  <Link to="/user/userCredit">放款资金计划管理</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu index="3" title={<span className={"el-icon"}><FontAwesomeIcon icon={faUserEdit}/><span style={{margin: "0.5rem"}}>运营管理</span></span>}>
                <Menu.Item index="3-1">
                  <Link to="/user/userCredit">尽调管理</Link>
                </Menu.Item>
                <Menu.Item index="3-2">
                  <Link to="/user/userCredit">授信项下订单管理</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu index="3" title={<span className={"el-icon"}><FontAwesomeIcon icon={faUserEdit}/><span style={{margin: "0.5rem"}}>签约管理</span></span>}>
                <Menu.Item index="3-1">
                  <Link to="/user/userCredit">签约信息管理</Link>
                </Menu.Item>
                <Menu.Item index="3-2">
                  <Link to="/user/userCredit">待签约确认管理</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu index="3" title={<span className={"el-icon"}><FontAwesomeIcon icon={faMoneyCheck}/><span style={{margin: "0.5rem"}}>财务管理</span></span>}>
                <Menu.Item index="3-1">
                  <Link to="/user/userCredit">小贷资金放款确认</Link>
                </Menu.Item>
                <Menu.Item index="3-2">
                  <Link to="/user/userCredit">小贷放款记录管理</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu index="3" title={<span className={"el-icon"}><FontAwesomeIcon icon={faUserEdit}/><span style={{margin: "0.5rem"}}>人员管理</span></span>}>
                <Menu.Item index="3-1">
                  <Link to="/user/userCredit">客户经理管理</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu index="3" title={<span className={"el-icon"}><FontAwesomeIcon icon={faUserEdit}/><span style={{margin: "0.5rem"}}>贷后管理</span></span>}>
                <Menu.Item index="3-1">
                  <Link to="/user/userCredit">客户经理管理</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu index="3" title={<span className={"el-icon"}><FontAwesomeIcon icon={faUserEdit}/><span style={{margin: "0.5rem"}}>还款管理</span></span>}>
                <Menu.Item index="3-1">
                  <Link to="/user/userCredit">还款计划查询</Link>
                </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Layout.Col>
      </Layout.Row>
    );
  }
}

export default inject("store", "signals")(observer(HsSider));
