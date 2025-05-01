import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { FaUserPlus, FaEnvelope, FaLock } from "react-icons/fa";

export function ToDoRegister() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userid: "",
      password: "",
      email: ""
    },
    onSubmit: (user) => {
      axios.post("http://127.0.0.1:4000/users", user).then(() => {
        alert("Registered Successfully.");
        navigate("/login");
      });
    }
  });

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="shadow-lg p-5 bg-white rounded" style={{ width: "450px" }}>
        <h3 className="text-center mb-4 text-success"><FaUserPlus className="me-2" />Create an Account</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label className="form-label"><FaUserPlus className="me-2" />User ID</label>
            <input
              type="text"
              name="userid"
              className="form-control"
              onChange={formik.handleChange}
              placeholder="Choose a user ID"
            />
          </div>
          <div className="mb-3">
            <label className="form-label"><FaLock className="me-2" />Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={formik.handleChange}
              placeholder="Choose a password"
            />
          </div>
          <div className="mb-4">
            <label className="form-label"><FaEnvelope className="me-2" />Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={formik.handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-success btn-block">Register</button>
          </div>
          <p className="text-center mt-3">
            Already registered? <Link to="/login" className="text-decoration-none">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
