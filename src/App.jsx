import ClassComp from "./components/ClassComp";
import ParentComp from "./components/ParentComp";
import ListUser from "./components/listUser";
import Header from "./components2/Header";
import Modal from "./components2/Modal";
import Table from "./components2/Table";
import ToolBar from "./components2/ToolBar";

function App() {
  return (
    <>
      {/* <div container> */}
      {/* {/* <ParentComp />
        <ClassComp />/*} */}
      {/* <ListUser />
      </div> */}
      <Header />
      <ToolBar />
      <Table />
      {/* <Modal /> */}
    </>
  );
}

export default App;

/// Có 1 nút button sau khi click vào thì hiển thị là ẩn, khi click lần nữa thì hiển thị là hiện
