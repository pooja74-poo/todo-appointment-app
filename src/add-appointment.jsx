import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { FaCalendarPlus } from "react-icons/fa";

export function AddAppointment() {
  const [cookies] = useCookies(["userid"]);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      date: "",
      userid: cookies["userid"]
    },
    onSubmit: (appointment) => {
      axios.post("http://127.0.0.1:4000/appointments", appointment).then(() => {
        navigate("/dashboard");
      });
    }
  });

  return (
    <div className="container py-5">
      <div className="p-5 bg-white rounded shadow dashboard-bg" style={{ maxWidth: "600px", margin: "auto" }}>
        <h3 className="text-success text-center mb-4">
          <FaCalendarPlus className="me-2" />
          Add New Appointment
        </h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" name="title" className="form-control" onChange={formik.handleChange} />
          </div>
          <div className="mb-4">
            <label className="form-label">Date</label>
            <input type="date" name="date" className="form-control" onChange={formik.handleChange} />
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success">Add</button>
            <Link to="/dashboard" className="btn btn-outline-secondary">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
