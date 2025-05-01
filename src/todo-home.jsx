import { Link } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

export function ToDoHome() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "86vh",
        width: "100%",
        background: "rgba(255, 255, 255, 0.0)",
        padding: "20px"
      }}
    >
      <div
        className="bg-white p-5 rounded shadow text-center"
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <h2 className="mb-4 text-primary">Welcome to the To-Do App</h2>
        <p className="mb-4 text-muted">
          Organize your tasks and stay productive. Sign in or register to get started.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link
            to="/register"
            className="btn btn-outline-success d-flex align-items-center"
          >
            <FaUserPlus className="me-2" />
            Register
          </Link>
          <Link
            to="/login"
            className="btn btn-outline-primary d-flex align-items-center"
          >
            <FaSignInAlt className="me-2" />
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
