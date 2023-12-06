import React, { useState } from "react";
import swal from "sweetalert";
import { withRouter } from "./utils";
import axios from "axios";
import bcrypt from "bcryptjs";
import { Link, useNavigate } from "react-router-dom";
import "./estilo.css";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const onChange = (e) =>{
    setCredentials({ ...credentials, [e.target.name]: e.target.value });}

  const login = () => {
    const salt = bcrypt.genSaltSync(10);
    const pwd = bcrypt.hashSync(credentials.password, salt);

    axios
      .post("http://localhost:2000/login", {
        username: credentials.username,
        password: pwd,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.id);
        // props.history.push('/dashboard');
        navigate("/principal");
      })
      .catch((err) => {
        if (
          err.response &&
          err.response.data &&
          err.response.data.errorMessage
        ) {
          swal({
            text: err.response.data.errorMessage,
            icon: "error",
            type: "error",
          });
        }
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Usuario</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Ingrese Usuario"
              name="username"
              value={credentials.username}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              autoComplete="off"
              placeholder="Enter password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" 
            disabled={credentials.username === '' && credentials.password === ''}
            onClick={login}
            className="btn btn-primary">
              Login
            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link
          to="/registrar"
          component="button"
          onClick={() => 
            navigate("/registrar")
          }
        >
          Registrarte
        </Link>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default withRouter(Login);
