import React, { useState } from "react";
import swal from "sweetalert";
import { withRouter } from "./utils";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Registrar() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });

  const navigate = useNavigate();
  const { username, password, confirm_password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const register = async () => {
    try {
      const res = await axios.post("http://localhost:2000/register", {
        username,
        password,
      });

      swal({
        text: res.data.title,
        icon: "success",
        type: "success",
      });

      // navigate("/");
      // Si `navigate` está disponible como prop, usa esa función para la navegación
      navigate("/");
    } catch (err) {
      swal({
        text: err.response.data.errorMessage,
        icon: "error",
        type: "error",
      });
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Ya estas Registrado?{" "}
            <span className="link-primary">
              <Link to="/">Sign In</Link>
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Usuario</label>
            <input
              type="text"
              autoComplete="off"
              name="username"
              value={username}
              onChange={onChange}
              className="form-control mt-1"
              placeholder="Ingrese su usuario"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              autoComplete="off"
              name="password"
              value={password}
              onChange={onChange}
              className="form-control mt-1"
              placeholder="Ingrese Contraseña"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirmar contraseña</label>
            <input
              type="password"
              autoComplete="off"
              name="confirm_password"
              value={confirm_password}
              onChange={onChange}
              className="form-control mt-1"
              placeholder="Confirmar contraseña"
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="button"
            disabled={username === "" && password === ""}
            onClick={register} 
            className="btn btn-primary">
              Registrarse
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default withRouter(Registrar);
