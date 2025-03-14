import "./App.css";
import DepartmentComponent from "./components/DepartmentComponent";
import EmployeeComponent from "./components/EmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListDepartmentComponent from "./components/ListDepartmentComponent";
import ListEmpComponent from "./components/ListEmpComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HelloWorld from "./Hello";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          {/* http://localhost:3000 */}
          <Route
            path="/"
            element={<ListEmpComponent></ListEmpComponent>}
          ></Route>
          {/* http://localhost:3000/employees */}
          <Route
            path="/employees"
            element={<ListEmpComponent></ListEmpComponent>}
          ></Route>
          {/* http://localhost:3000/add=employee */}
          <Route
            path="/add-employee"
            element={<EmployeeComponent></EmployeeComponent>}
          ></Route>
          {/* http://localhost:3000/edit-employee/1 */}
          <Route
            path="/edit-employee/:id"
            element={<EmployeeComponent></EmployeeComponent>}
          ></Route>
          {/* http://localhost:3000/departments */}
          <Route
            path="/departments"
            element={<ListDepartmentComponent></ListDepartmentComponent>}
          ></Route>
          {/* http://localhost:3000/add=department  */}
          <Route
            path="/add-department"
            element={<DepartmentComponent></DepartmentComponent>}
          ></Route>
          {/*  */}
          <Route
            path="/edit-department/:id"
            element={<DepartmentComponent></DepartmentComponent>}
          ></Route>
        </Routes>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </>
  );
}

export default App;
