import React, { Component } from "react";
import FromAddStudents from "./FromAddStudents";
import FromEditStudent from "./FromEditStudent";
import FormDeleteStudents from "./FormDeleteStudents";

export default class Modal extends Component {
  render() {
    return (
      <>
        <FromAddStudents />
        <FormDeleteStudents />
        <FromEditStudent />
        <div
          className="toast align-items-center text-white bg-primary border-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">Xóa thành công</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
        </div>
      </>
    );
  }
}
