import React, { useState, useEffect } from "react";
import Axios from "../../services/Axios";
import { useNavigate } from "react-router-dom";

function VerResetas() {
  const datos = {
    id: "",
    nombre: "",
    descripcion: "",
    image: "",
  };

  const urlImages = "http://localhost:4001/images/";

  const [saveDatos, setSaveDatos] = useState(datos);
  const [almacenarDatos, setAlmacenarDatos] = useState([]);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setSaveDatos({ ...saveDatos, [name]: value });
  };

  const GuardarDatos = async (e) => {
    e.preventDefault();
    const formu = document.getElementById("form-producto");
    const formData = new FormData(formu);
    await Axios.post("producto/guardarProducto", formData).then(() => {
      console.log("Registros guardados correctamente");
    });
    console.log();
    consultarInformacion();
    setSaveDatos(datos);
  };

  const consultarInformacion = async () => {
    const consultar = await Axios.get("producto/consultarProducto");
    setAlmacenarDatos(consultar.data);
    //console.log(consultar.data);
  };

  const Eliminar = async (id) => {
    const eliminar = await Axios.delete(`producto/eliminarProducto/${id}`);
    console.log("Los datos se eliminaron correctamente: " + eliminar);
    consultarInformacion();
  };

  useEffect(() => {
    consultarInformacion();
  }, []);

  const abrirModal = () => {
    setShow(!show);
  };

  const listaProducto = almacenarDatos.map((producto, index) => {
    return (
      <tr key={index} className="text-center">
        <th scope="row">{index + 1}</th>
        <td>{producto.nombre}</td>
        <td>{producto.descripcion}</td>
        <td>
          <img
            src={urlImages + producto.filename}
            className="img-thumbnail"
            alt="..."
            style={{ width: "50px" }}
          />
        </td>
      </tr>
    );
  });

  return (
    <div className="Container" style={{ margin: "4%" }}><br/>
      <table className="table table-bordered border-primary table-info table-hover border border-5">
        <thead>
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Imagen</th>
          </tr>
        </thead>
        <tbody>{listaProducto}</tbody>
      </table>
    </div>
  );
}

export default VerResetas;
