import React from "react";
import { Link } from "react-router-dom";
import DataTable from "../components/dataTable.jsx";
import "../global.css";
import { useSelector } from "react-redux";

const columns = [
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Start Date",
    accessor: "startDate",
  },
  {
    Header: "Department",
    accessor: "department",
  },
  {
    Header: "Date of Birth",
    accessor: "dateOfBirth",
  },
  {
    Header: "Street",
    accessor: "street",
  },
  {
    Header: "City",
    accessor: "city",
  },
  {
    Header: "State",
    accessor: "state",
  },
  {
    Header: "Zip Code",
    accessor: "zipCode",
  },
];

function Employee() {
  const employeeList = useSelector((state) => state.employees);

  return (
    <div>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <DataTable columns={columns} data={employeeList} />
        <Link className="link" to="/">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Employee;
