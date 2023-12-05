import React, { useState, useEffect } from "react";
import Axios from "../../services/Axios";
import {useNavigate} from "react-router-dom";

function ListarEmpleados() {
  const [empleados, setEmpleados] = useState([]);

  const navigate=useNavigate();

 

  const consultarEmpleados = async () => {
    const consultar = await Axios.get("/empleado/getEmpleados");
    setEmpleados(consultar.data);
    console.log(consultar.data);
  };

  const deleteEmpleado=async(id)=>{
    if(window.confirm("¿Esta seguro de eliminar el dato?")){
     const eliminar= await Axios.delete(`/empleado/deleteEmpleado/${id}`);
     console.log("Se eliminó el dato", eliminar);
    }  
consultarEmpleados();
    
  }

  useEffect(() => {
    consultarEmpleados();
  }, []);

  return (
    <div class="p-3 mb-2 bg-danger-subtle border border-danger-subtle border border-5">
      <table class="table ">
        <thead>
          <tr>
          <th scope="col">#</th>
            <th scope="col">Correo</th>
            <th scope="col">Contraseña</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        {
            empleados.map((empleado,index)=>{
                return(
                    <tbody > <br/>
                    <tr>
                      <th scope="row">{index+1}</th>
                      <td>{empleado.email}</td>
                      <td>{empleado.password  }</td>
                      <td><button type="button" class="btn btn-info " onClick={()=>navigate(`/fempleado/${empleado._id}`)}><i class="bi bi-pencil-fill"></i></button ></td>
                      <td><button type="button" class="btn btn-danger" onClick={()=>deleteEmpleado(empleado._id)}><i class="bi bi-trash-fill"></i></button></td>
                    </tr>
                    
                  </tbody>
                )
            })
        }
        
       
      </table>
    </div>
  );
}
 
export default ListarEmpleados;