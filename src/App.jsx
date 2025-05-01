import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import './todo-index.css';
import { ToDoHome } from './todo-home';
import { ToDoLogin } from './todo-login';
import { ToDoRegister } from './todo-register';
import { UserDashboard } from './user-dashboard';
import { AddAppointment } from './add-appointment';
import { DeleteAppointment } from './delete-appointment';
import { EditAppointment } from './edit-appointment';

export function ToDoIndex() {
    return (
      <CookiesProvider>
        <div className="bg-image">
          <BrowserRouter>
          <header
  className="text-center bg-white shadow rounded mx-auto mt-3"
  style={{
    width: "90%",
    // maxWidth: "600px",
    padding: "20px",
    borderRadius: "10px"
  }}
>
  <Link
    to="/"
    className="text-decoration-none text-primary fw-bold"
    style={{ fontSize: "1.8rem", letterSpacing: "1px" }}
  >
    📋 TO-DO PLANNER
  </Link>
</header>

            <section>
              <Routes>
                <Route path="/" element={<ToDoHome />} />
                <Route path="login" element={<ToDoLogin />} />
                <Route path="register" element={<ToDoRegister />} />
                <Route path="dashboard" element={<UserDashboard />} />
                <Route path="add-appointment" element={<AddAppointment />} />
                <Route path="delete-appointment/:id" element={<DeleteAppointment />} />
                <Route path="edit-appointment/:id" element={<EditAppointment />} />
              </Routes>
            </section>
          </BrowserRouter>
        </div>
      </CookiesProvider>
    );
  }
  