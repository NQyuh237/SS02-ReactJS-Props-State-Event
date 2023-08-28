import React, { Component } from "react";
import FromEditStudent from "./FromEditStudent";
import FormDeleteStudents from "./FormDeleteStudents";
import ToolBar from "./ToolBar";

export default class Table extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.search);
    this.state = {
      users: [
        {
          userId: 1,
          userName: "Nguyễn Thị A",
          dateOfBirth: "20/10/1998",
          address: "tổ 10",
          email: "a@gmail.com",
          password: "Abcd1234",
        },

        {
          userId: 2,
          userName: "Nguyễn Thị B",
          dateOfBirth: "20/10/1995",
          address: "tổ 11",
          email: "b@gmail.com",
          password: "Abcd5678",
        },

        {
          userId: 3,
          userName: "Nguyễn Thị C",
          dateOfBirth: "20/10/1990",
          address: "tổ 12",
          email: "c@gmail.com",
          password: "Abcd9876",
        },

        {
          userId: 4,
          userName: "Nguyễn Thị D",
          dateOfBirth: "20/10/1985",
          address: "tổ 13",
          email: "d@gmail.com",
          password: "Abcd5432",
        },

        {
          userId: 5,
          userName: "Nguyễn Thị E",
          dateOfBirth: "20/10/1980",
          address: "tổ 14",
          email: "e@gmail.com",
          password: "Abcd2109",
        },

        {
          userId: 6,
          userName: "Nguyễn Thị F",
          dateOfBirth: "20/10/1975",
          address: "tổ 15",
          email: "f@gmail.com",
          password: "Abcd8901",
        },

        {
          userId: 7,
          userName: "Nguyễn Thị G",
          dateOfBirth: "20/10/1970",
          address: "tổ 16",
          email: "g@gmail.com",
          password: "Abcd1256",
        },

        {
          userId: 8,
          userName: "Nguyễn Thị H",
          dateOfBirth: "20/10/1965",
          address: "tổ 17",
          email: "h@gmail.com",
          password: "Abcd9870",
        },

        {
          userId: 9,
          userName: "Nguyễn Thị I",
          dateOfBirth: "20/10/1960",
          address: "tổ 18",
          email: "i@gmail.com",
          password: "Abcd3333",
        },

        {
          userId: 10,
          userName: "Nguyễn Thị K",
          dateOfBirth: "20/10/1955",
          address: "tổ 19",
          email: "k@gmail.com",
          password: "Abcd4567",
        },
      ],
      show: false,
      showd: false,
    };
  }
  showEditForm = () => {
    this.setState({
      show: true,
    });
  };

  showDeleteForm = () => {
    this.setState({
      showd: true,
    });
  };
  offDeleteForm = () => {
    this.setState({
      showd: false,
    });
  };

  offEditForm = () => {
    this.setState({
      show: false,
    });
  };
  searchV = () => {
    let key = this.state.users.filter((e) =>
      e.userName.includes(this.props.search)
    );
    console.log(key);
    this.setState({
      users: key,
    });
  };
  render() {
    return (
      <>
        <button onClick={this.searchV}>ssss</button>
        {this.state.show ? (
          <FromEditStudent offEditForm={this.offEditForm} />
        ) : (
          <></>
        )}
        {this.state.showd ? (
          <FormDeleteStudents offDeleteForm={this.offDeleteForm} />
        ) : (
          <></>
        )}
        <div class="m-5">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Mã</th>
                <th scope="col">Tên sinh viên</th>
                <th scope="col">Ngày sinh</th>
                <th scope="col">Địa chỉ</th>
                <th scope="col">Email</th>
                <th scope="col">Mật khẩu</th>
                <th class="text-center" colspan="2" scope="col">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((e) => (
                <tr>
                  <td>{e.userId}</td>
                  <td>{e.userName}</td>
                  <td>{e.dateOfBirth}</td>
                  <td>{e.address}</td>
                  <td>{e.email}</td>
                  <td>{e.password}</td>
                  <td>
                    <i
                      data-bs-toggle="modal"
                      data-bs-target="#updateStudent"
                      class="fa-solid fa-pen-to-square text-warning"
                      onClick={this.showEditForm}
                    ></i>
                  </td>
                  <td>
                    <i
                      data-bs-toggle="modal"
                      data-bs-target="#confirmDelete"
                      class="fa-solid fa-trash text-danger"
                      onClick={this.showDeleteForm}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
