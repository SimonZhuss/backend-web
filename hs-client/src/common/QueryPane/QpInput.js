import { Input } from "element-react";
import React, { Component } from "react";

export default class QpInput extends Component {
    constructor(props) {
        super(props);
    }

    onChange(e) {
    }

    render() {
        return <Input {...this.props}/>
    }
}