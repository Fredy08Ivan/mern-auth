import React from "react";

import { Routes, Route, } from "react-router-dom";

import Home from "../pages/inicio/Home";
import Login from "../pages/perfil/Login"

import TabladeServicio from "../pages/contenido/AdminServicios/TabladeServicio";
import EditarServicio from "../pages/contenido/AdminServicios/EditarServicio";
import principal from "../pages/inicio/principal";
import AdminPersonas from "../pages/contenido/AdminPersonas/AdminPersonas";
import FormPersonas from "../pages/contenido/AdminPersonas/FormPersonas";
import FormEmpleados from "../pages/inicio/FormEmpleados";
import Registrar from "../pages/perfil/Registrar"
import ListarEmpleados from "../pages/inicio/ListarEmpleados";
import Almuerzo from "../categoria/Almuerzo";
import Desayuno from "../categoria/Desayuno";
import Cena from "../categoria/Cena";

import VerResetas from "../pages/inicio/VerResetas";
import { Layout } from "../Layout/Layout";
import { NotFound } from "../components/notFound";



export function Rutas() {


  const loadLayouts = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  return (
    <Routes>

      
      <Route path="/" element={<Login/>} />
      

      <Route path="/NiceFood" element={loadLayouts(Layout, Home)} />
      <Route path='*' element={loadLayouts(Layout, NotFound)} />
      <Route path="/principal" element={loadLayouts(Layout,principal)}/>
      <Route path='/Tabla' element={loadLayouts(Layout, TabladeServicio)} />
      <Route path='/Editar/:id' element={loadLayouts(Layout, EditarServicio)} />
      <Route path="formEmpleados" element={loadLayouts(Layout,FormEmpleados)}/>
      <Route path='/TablaPersonas' element={loadLayouts(Layout, AdminPersonas)} />
      <Route path='/EditarPersonas/:id' element={loadLayouts(Layout, FormPersonas)} />
      <Route path="ListarEmpleados" element={loadLayouts(Layout,ListarEmpleados)}/>
      <Route path="/almuerzo" element={<Almuerzo />} />
      <Route path="/desayuno" element={<Desayuno />} />
      <Route path="/cena" element={<Cena />} />

      <Route path="/Recetas" element={<VerResetas/>} />

      <Route path="/registrar" element={<Registrar/>}/>

    </Routes>
  );
}
