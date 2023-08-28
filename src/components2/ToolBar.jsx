import React, { Component } from "react";
import FromAddStudents from "./FromAddStudents";
import Table from "./Table";

export default class ToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      search: "",
    };
  }
  changeShow = () => {
    !this.setState({
      show: true,
    });
  };
  turnOffForm = () => {
    !this.setState({
      show: false,
    });
  };
  searchValue = (e) => {
    // console.log(e.target.value);
    this.setState({
      search: e.target.value,
    });
  };
  render() {
    return (
      <>
        {this.state.show == true ? (
          <FromAddStudents turnOffForm={this.turnOffForm} />
        ) : (
          <></>
        )}
        <div className="d-flex m-5 justify-content-between">
          <div className="d-flex align-items-center gap-4">
            <div style={{ width: 263, fontWeight: 600, fontSize: 20 }}>
              Quản lý sinh viên
            </div>
            <select className="form-select">
              <option value="">-- Sắp xếp theo tên --</option>
              <option value="">Tăng dần</option>
              <option value="">Giảm dần</option>
            </select>
          </div>
          <div className="d-flex align-items-center gap-4">
            <input
              style={{ minWidth: 300 }}
              type="text"
              className="form-control"
              placeholder="Tìm kiếm sinh viên theo tên"
              value={this.state.search}
              onChange={(e) => this.searchValue(e)}
            />
            <button
              style={{ minWidth: 170 }}
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={this.changeShow}
            >
              Thêm mới sinh viên
            </button>
          </div>
        </div>
      </>
    );
  }
}
