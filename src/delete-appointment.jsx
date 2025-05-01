import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

export function DeleteAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState({ id: 0, title: "", date: "", userid: "" });

  useEffect(() => {
    axios.get(`http://127.0.0.1:4000/appointments/${id}`).then((response) => {
      setAppointment(response.data);
    });
  }, [id]);

  function handleDeleteClick() {
    axios.delete(`http://127.0.0.1:4000/appointments/${id}`).then(() => {
      navigate("/dashboard");
    });
  }

  return (
    <div className="container py-5">
      <div className="p-5 bg-white rounded shadow dashboard-bg text-center" style={{ maxWidth: "600px", margin: "auto" }}>
        <h3 className="text-danger mb-3">
          <FaTrashAlt className="me-2" />
          Delete Appointment
        </h3>
        <p className="mb-4">
          Are you sure you want to delete the appointment:
          <br />
          <strong className="text-danger mt-2 d-block">{appointment.title}</strong>
        </p>
        <div className="d-flex justify-content-around">
          <button onClick={handleDeleteClick} className="btn btn-danger">Yes, Delete</button>
          <Link to="/dashboard" className="btn btn-outline-secondary">Cancel</Link>
        </div>
      </div>
    </div>
  );
}
