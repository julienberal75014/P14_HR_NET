import React, { useState } from "react";
import { Link } from "react-router-dom";
import DateTimePicker from "../components/dateTimePicker.jsx";
import Dropdown from "../components/dropdown.jsx";
import { useNavigate } from "react-router-dom";
import "../global.css";
import { Modal } from "modal-plugin-jbdv/dist/index.js";
import { useDispatch } from "react-redux";
import { addEmployeeAction } from "../redux/action.js";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    startDate: "",
    department: "Sales",
    dateOfBirth: "",
    street: "",
    city: "",
    state: "",
    zipCode: 0,
  });

  const [errors, setErrors] = useState({});

  // Parcours tout les champs de l'objet employee et vérifie si ils sont vide
  const validateForm = () => {
    const newErrors = {};
    Object.keys(employee).forEach((key) => {
      if (!employee[key]) {
        newErrors[key] = "Ce champ est requis";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      dispatch(addEmployeeAction(employee));
      handleOpenModal();
    }
  }

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleButtons = () => {
    navigate("/employee");
  };
  return (
    <div id="create-employee">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div></div>
      <div className="container">
        <Link className="link" to="/employee">
          View Current Employees
        </Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={(e) =>
              setEmployee({ ...employee, firstName: e.target.value })
            }
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={(e) =>
              setEmployee({ ...employee, lastName: e.target.value })
            }
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DateTimePicker
            onDateChange={(date) => {
              const dateFormated = date.toLocaleDateString("en-GB");
              setEmployee({ ...employee, dateOfBirth: dateFormated });
            }}
            value={employee.dateOfBirth}
          />
          {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}

          <label htmlFor="start-date">Start Date</label>
          <DateTimePicker
            onDateChange={(date) => {
              const dateFormated = date.toLocaleDateString("en-GB");
              setEmployee({ ...employee, startDate: dateFormated });
            }}
            value={employee.startDate}
          />
          {errors.startDate && <p className="error">{errors.startDate}</p>}

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              onChange={(e) =>
                setEmployee({ ...employee, street: e.target.value })
              }
            />
            {errors.street && <p className="error">{errors.street}</p>}

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              onChange={(e) =>
                setEmployee({ ...employee, city: e.target.value })
              }
            />
            {errors.city && <p className="error">{errors.city}</p>}

            <label htmlFor="state">State</label>
            <Dropdown
              onStateChange={(state) => setEmployee({ ...employee, state })}
              value={employee.state}
            />
            {errors.state && <p className="error">{errors.state}</p>}

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              onChange={(e) =>
                setEmployee({ ...employee, zipCode: e.target.value })
              }
            />
            {errors.zipCode && <p className="error">{errors.zipCode}</p>}
          </fieldset>

          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            onChange={(e) =>
              setEmployee({ ...employee, department: e.target.value })
            }
            value={employee.department}
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>
        <button onClick={handleSubmit}>Create Employee</button>
        {showModal && (
          <Modal
            content="Employee created !"
            onClose={handleCloseModal}
            buttons={[
              {
                label: "View Employees",
                onClick: () => {
                  handleButtons();
                },
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
