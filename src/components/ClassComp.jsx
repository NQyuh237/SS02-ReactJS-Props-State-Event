import React, { Component } from "react";
import ChildrenClassComp from "./ChildrenClassComp";
export default class ClassComp extends Component {
  //Khai báo contructor => Hàm khởi tạo hay là bản thiết kế của một đối tượng
  constructor(props) {
    super(props); // super được sử dụng để kế thừa lại tất cả những phương thức và thuộc tính cả lớp cha
    //Khai báo state
    this.state = {
      // danh sách các state muốn khai báo
      name: "Nguyễn văn bố",
      company: "bdbdbdbdbdbdb",
      status: true,
    };
  }
  // hàm cập nhật userName
  handleChangeName = (name) => {
    this.setState({
      name: name,
    });
  };

  changeState = (e) => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 74) {
        this.setState({
          company: "dbdbdbdbdbdbd",
        });
        return;
      }
      if (e.keyCode == 70) {
        this.setState({
          company: "bdbdbdbdbdbdb",
        });
        return;
      }
      if (e.keyCode == 71) {
        this.setState({
          company: "bbbbbbbbbbbbb",
        });
        return;
      }
      if (e.keyCode == 72) {
        this.setState({
          company: "ddddddddddddd",
        });
        return;
      }
    });
  };
  handleStatus = () => {
    this.setState({
      status: !this.state.status,
    });
  };
  render() {
    return (
      <>
        <div>Tên: {this.state.company}</div>
        <button onClick={(e) => this.changeState(e)}>Change State</button>
        <br />
        <br />
        <button onClick={this.handleStatus}>
          {this.state.status ? "Hiện" : "Ẩn"}
        </button>
        <h1>{this.state.name}</h1>
        <ChildrenClassComp
          userName={this.state.name}
          handleChangeName={this.handleChangeName}
        />
      </>
    );
  }
}
