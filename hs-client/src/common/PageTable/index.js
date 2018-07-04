import styled from "styled-components";
import React, { Component } from "react";
import { Table, Pagination, Button, Layout, Loading } from "element-react";
import { Container } from "./elements";
import axios from "axios";
import Qs from "qs";
import { merge } from "lodash";
import { inject, observer } from "mobx-react";

class PageTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      pageSize: this.props.pageSize || 10,
      currentPage: this.props.currentPage || 1,
      isLoading: false,
      data: []
    };
  }

  getQueryParams() {
    const _params = Object.keys(this.props.qp || {}).reduce((ac, cur) => {
        return Object.assign(ac, Object.defineProperty({}, `${this.props.qp[cur].name}`, {value: this.props.qp[cur].value}));
    }, {});
    return {
      pageSize: this.state.pageSize,
      currentPage: this.state.currentPage,
      ..._params // 表各关联查询参数
    };
  }

  loadData(url, params) {
    // Send a POST request
    this.setState({
        isLoading: true
    });
    axios({
      method: "post",
      url: this.props.url,
      data: {},
      responseType: "json",
      timeout: 5000,
      params: {
        ...merge(this.getQueryParams(), params || {})
      },
      onUploadProgress: function(progressEvent) {},
      onDownloadProgress: function(progressEvent) {},
      paramsSerializer: function(params) {
        return Qs.stringify(params, { arrayFormat: "brackets" });
      },
      headers: merge(
        this.props.headers || {},
        this.props.store.authHeader || {}
      )
    })
      .then(resp => {
        if (resp && resp.status == 200) {
          if (resp.data) {
            this.setState({
              data: resp.data.data,
              total: resp.data.total,
              pageSize: resp.data.pageSize,
              currentPage: resp.data.currentPage
            });
          }
          setTimeout(() => {
              this.setState({isLoading: false
            })
          }, 2000);
        }
      })
      .catch(err => {});
  }

  onQueryClick() {
    this.loadData();
  }

  onCurrentChange(currentPage) {
      this.loadData(null, {currentPage});
  }

  render() {
    const { data, currentPage, pageSize, total } = this.state;
    return (
      <Container>
        <Loading
          loading={this.state.isLoading}
          text={this.props.loadingText || "拼命加载中..."}
        >
          <Button type={"primary"} onClick={this.onQueryClick.bind(this)} style={{float: "right"}}>
            查询
          </Button>
          <Table {...this.props} data={data} columns={this.props.columns} />
          <Pagination
            {...this.props}
            pageSize={pageSize}
            currentPage={currentPage}
            total={total}
            onCurrentChange={this.onCurrentChange.bind(this)}
          />
        </Loading>
      </Container>
    );
  }
}

export default inject("store", "signals")(observer(PageTable));
