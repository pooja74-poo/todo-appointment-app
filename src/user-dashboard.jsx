import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus, FaSignOutAlt, FaEdit, FaTrash } from "react-icons/fa";

export function UserDashboard() {
  const [cookies, , removeCookie] = useCookies(["userid"]);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://127.0.0.1:4000/appointments").then((response) => {
      const userAppointments = response.data.filter(
        (appointment) => appointment.userid === cookies["userid"]
      );
      setAppointments(userAppointments);
    });
  }, [cookies]);

  function handleSignout() {
    removeCookie("userid");
    navigate("/");
  }

  return (
    <div className="container py-5">
      {/* Add background container only here */}
      <div className="p-4 rounded shadow dashboard-bg">

        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
          <h3 className="text-primary mb-3">
            Welcome, <span className="text-dark">{cookies["userid"]}</span>
          </h3>
          <button onClick={handleSignout} className="btn btn-outline-danger mb-3">
            <FaSignOutAlt className="me-2" />
            Sign out
          </button>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
          <h4 className="mb-3">🗓️ Your Appointments</h4>
          <Link to="/add-appointment" className="btn btn-success mb-3">
            <FaPlus className="me-2" />
            Add Appointment
          </Link>
        </div>

        {appointments.length === 0 ? (
          <div className="alert alert-info">No appointments found.</div>
        ) : (
          <div className="row">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{appointment.title}</h5>
                    <p className="card-text mb-4">📅 {appointment.date}</p>
                    <div className="mt-auto d-flex justify-content-between">
                      <Link to={`/edit-appointment/${appointment.id}`} className="btn btn-sm btn-warning">
                        <FaEdit className="me-1" />
                        Edit
                      </Link>
                      <Link to={`/delete-appointment/${appointment.id}`} className="btn btn-sm btn-danger">
                        <FaTrash className="me-1" />
                        Delete
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}