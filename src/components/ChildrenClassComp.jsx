import React, { Component } from "react";
let add = true;
export default class ChildrenClassComp extends Component {
  handleChangeByClick = () => {
    add = !add;
    this.props.handleChangeName(add ? "Nguyễn Thị Mẹ" : "Bùi Văn Ông");
  };
  render() {
    return (
      <>
        <div>{this.props.userName}</div>
        <button onClick={this.handleChangeByClick}>Change props</button>
      </>
    );
  }
}
