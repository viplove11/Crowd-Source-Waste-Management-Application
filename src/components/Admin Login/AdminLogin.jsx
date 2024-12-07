import React, { useRef } from "react";
import "./AdminLogin.css";
import { adminData } from "../../assets/AdminData";

const AdminLogin = ({ login, setLogin }) => {
  const form_username = useRef();
  const form_password = useRef();

  const handleLoginSubmit = (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page

    const username = form_username.current.value;
    const password = form_password.current.value;

    console.log(username, password);

    // Validate credentials
    const user = adminData.find(
      (admin) => admin.name === username && admin.password === password
    );

    if (user) {
      setLogin(user);
      alert("Logged in successfully");
    } else {
      alert("Login failed. Invalid username or password.");
    }
  };

  return (
    <div className="admin-login">
      <form onSubmit={handleLoginSubmit}>
        <p>Admin Login</p>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            ref={form_username}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" ref={form_password} />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
