import React, { useState, useEffect } from "react";
import Axios from "../../services/Axios";
import { useNavigate } from "react-router-dom";



function Home() {
  const datos = {
    id: "",
    nombre: "",
    precio: "",
    cantidad: "",
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
    //const data = Object.fromEntries(formData);
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

    setShow({ ...!show });
  };



  return (
    <div>

      <div className="container text-center p-2">
        <div className="row row-cols-4">

          {almacenarDatos.map((producto, index) => {
            return (
              <div className="col p-2" key={index}>
                <div className="card h-100">
                  <img src={urlImages + producto.filename} style={{
                    height: "300px", // Establece la altura de la imagen en 150 píxeles
                  }} />
                  <div className="card-body">
                    <p className="card-title">{producto.nombre}</p>
                    


                    <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Reservar
                    </button>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">{producto.nombre}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <div className="card h-100">
                              <img src={urlImages + producto.filename} style={{
                                heirght: "300px", // Establece la altura de la imagen en 150 píxeles
                              }} />
                            </div>
                            <p>{producto.descripcion}</p>
                

                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Regresar</button>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            );
          })}
      </div>
    </div>
    </div>
  );
}

export default Home
