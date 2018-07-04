import React, { Component } from "react";
import {
  Tabs,
  Layout,
  Button,
  Table,
  Select,
  Input,
  Pagination
} from "element-react";
import "./UserInfoQuery.css";
import { Divider } from "./elements";
import PageTable from "../../../common/PageTable";
import { QueryPane } from "../../../common/QueryPane";

export default class UserInfoQuery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      columns: [
        {
          label: "日期",
          prop: "date",
          width: 180
        },
        {
          label: "姓名",
          prop: "name",
          width: 180
        },
        {
          label: "地址",
          prop: "address"
        }
      ],
      qp: {
        customerName: { name: "customerName", value: "XLM" },
        idCard: { name: "idCard", value: "332290" },
        product: {
          name: "product",
          options: [
            {
              value: "选项1",
              label: "黄金糕"
            },
            {
              value: "选项2",
              label: "双皮奶"
            },
            {
              value: "选项3",
              label: "蚵仔煎"
            },
            {
              value: "选项4",
              label: "龙须面"
            },
            {
              value: "选项5",
              label: "北京烤鸭"
            }
          ],
          value: "选项3"
        }
      }
    };
  }

  componentDidMount() {
      this.refs.pageRef.wrappedInstance.loadData();
  }

  onQueryParamsChange(newParams) {
    this.setState({ qp: newParams });
  }

  render() {
    return (
      <Tabs type="card" value="1" activeName="1">
        <Tabs.Pane
          label="用户管理"
          closable={true}
          name="1"
          style={{ overflow: "visible" }}
        >
          <QueryPane
            ref={el => {}}
            onQpChanged={this.onQueryParamsChange.bind(this)}
          >
            <Layout.Row gutter={20}>
              <Layout.Col span="6">
                <Input
                  placeholder="客户姓名"
                  onChange={e => {
                    this.setState({ qp: { customerName: { value: e.value } } });
                  }}
                />
              </Layout.Col>
              <Layout.Col span="6">
                <Input
                  placeholder="客户证件号"
                  value={this.state.qp.idCard.value}
                />
              </Layout.Col>
              <Layout.Col span="6">
                <Select
                  value={this.state.qp.product.value}
                  placeholder="产品名称"
                >
                  {this.state.qp.product.options.map(el => {
                    return (
                      <Select.Option
                        key={el.value}
                        label={el.label}
                        value={el.value}
                      />
                    );
                  })}
                </Select>
              </Layout.Col>
            </Layout.Row>
          </QueryPane>
          <Divider />
          <PageTable
            url={"/api/v1/userInfoQuery"}
            ref={"pageRef"}
            columns={[
              {
                label: "日期",
                prop: "createTime",
                width: 180
              },
              {
                label: "姓名",
                prop: "name",
                width: 180
              },
              {
                label: "年龄",
                prop: "age"
              },
              {
                label: "ID",
                prop: "id"
              }
            ]}
            qp={this.state.qp}
            fit={false}
            border={true}
            pageSizes={[10, 20, 50]}
          />
        </Tabs.Pane>
      </Tabs>
    );
  }
}
