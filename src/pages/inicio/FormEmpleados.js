import React, { useState, useEffect } from "react";
import Axios from "../../services/Axios";
import { useParams, useNavigate, Link } from "react-router-dom";

function FormEmpleados() {
  const initialState = {
    _id: "",
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialState);
  //const [datos, setDatos] = useState([]);
  const params = useParams();
  //const navigate = useNavigate();

  const obtenerValue = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const GuardarEmpleado = async () => {
    const formularioEmpleado = document.getElementById("form-empleado");
const formData = new FormData(formularioEmpleado);

   /* await Axios.post("/empleado/addEmpleado", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(() => {
      console.log("Datos guardados");
    });*/
  };

  const obtnerEmpleado = async (id) => {
    const buscar = await Axios.get(`/empleado/getEmpleado/` + id);
    setValues(buscar.data);
    //console.log(buscar.data);
  };

  /*const updateEmpleado=async()=>{
  await Axios.patch(`/empleado/updateEmpleado/${params.id}`,values).then(
    ()=>{
      console.log("Datos actualizados correctamente");
    }
  )
navigate("/listarem")
 }*/

  const Enviar = (e) => {
    e.preventDefault();
    GuardarEmpleado();
  };

  useEffect(() => {
    //obtnerEmpleado(params.id);
  }, []);

  return (
    <div className="p-3 col-md-3 bg-success-subtle text-emphasis-success">
      <div className="container-fluid col-md-6 offset-md-3">
        <br /> <br /> <br /> <br />
        <div className="card ">
          <div className="p-3 mb-2 bg-light text-dark">
            <div className="card-body">
              <form onSubmit={Enviar}>
                <h1 className="text-center">
                  <i className="bi bi-person-circle"></i>
                </h1>
                <div className="text-center">
                  <h4 className="display-4">
                    <label htmlFor="formGroupExampleInput" className="form-label">
                      Login
                    </label>
                  </h4>
                </div>
                <div className="">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="name@example.com"
                    name="email"
                    value={values.email}
                    onChange={obtenerValue}
                  />
                </div>

                <br />

                <div className="">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder=""
                    value={values.password}
                    name="password"
                    onChange={obtenerValue}
                  />
                </div>

                <br />

                <div className="">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Recordarme
                    </label>
                  </div>
                </div>
                <center>
                  <button type="submit" className="btn btn-primary">
                    Enviar
                  </button>
                </center>
              </form>

              <div>
                <Link to="/Registro" className="waves-effect waves-light btn">
                  ¿No tienes una cuenta?
                  <a className=""> Regístrate</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormEmpleados;
