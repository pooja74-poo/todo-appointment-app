import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { FaEdit } from "react-icons/fa";

export function EditAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState({ id: 0, title: "", date: "", userid: "" });

  useEffect(() => {
    axios.get(`http://127.0.0.1:4000/appointments/${id}`).then((response) => {
      setAppointment(response.data);
    });
  }, [id]);

  const formik = useFormik({
    initialValues: {
      id: appointment.id,
      title: appointment.title,
      date: appointment.date,
      userid: appointment.userid
    },
    onSubmit: (updatedAppointment) => {
      axios.put(`http://127.0.0.1:4000/appointments/${id}`, updatedAppointment).then(() => {
        navigate("/dashboard");
      });
    },
    enableReinitialize: true
  });

  return (
    <div className="container py-5">
      <div className="p-5 bg-white rounded shadow dashboard-bg" style={{ maxWidth: "600px", margin: "auto" }}>
        <h3 className="text-warning text-center mb-4">
          <FaEdit className="me-2" />
          Edit Appointment
        </h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" name="title" className="form-control" onChange={formik.handleChange} value={formik.values.title} />
          </div>
          <div className="mb-4">
            <label className="form-label">Date</label>
            <input type="date" name="date" className="form-control" onChange={formik.handleChange} value={formik.values.date} />
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-warning">Save</button>
            <Link to="/dashboard" className="btn btn-outline-secondary">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
