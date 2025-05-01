import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

export function ToDoLogin() {
  const [cookies, setCookie] = useCookies(["userid"]);
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userid: "",
      password: ""
    },
    onSubmit: (user) => {
      axios.get("http://127.0.0.1:4000/users").then((response) => {
        let userdetails = response.data.find(
          (item) => item.userid === user.userid
        );
        if (userdetails) {
          if (user.password === userdetails.password) {
            setCookie("userid", userdetails.userid);
            navigate("/dashboard");
          } else {
            alert("Invalid Password");
          }
        } else {
          alert("User Doesn't exist");
        }
      });
    }
  });

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="shadow-lg p-5 bg-white rounded" style={{ width: "400px" }}>
        <h3 className="text-center mb-4 text-primary">Welcome Back</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label className="form-label"><FaUser className="me-2" />User ID</label>
            <input
              type="text"
              name="userid"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.userid}
              placeholder="Enter your user ID"
            />
          </div>
          <div className="mb-4">
            <label className="form-label"><FaLock className="me-2" />Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Enter your password"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-block">Login</button>
          </div>
          <p className="text-center mt-3">
            New user? <Link to="/register" className="text-decoration-none">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
