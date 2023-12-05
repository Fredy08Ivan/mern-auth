import React from 'react'
import { Link } from 'react-router-dom'


function Barramenu() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/FormEmpleados">
        NiceFood
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/NiceFood"></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/principal"> 
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Recetas">
              Registrar Recetas
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#">
              
            </Link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categoria
            </a>
            <ul class="dropdown-menu">
              <Link class="nav-link" to="/desayuno">
                Desayuno
              </Link>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <Link class="nav-link" to="/almuerzo">
                Almuerzo
              </Link>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <Link class="nav-link" to="/cena">
                Cena
              </Link>
            </ul>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Admon
            </a>
            <ul class="dropdown-menu">
              <li><Link class="nav-link" to="/Tabla">Admonservicio</Link></li>
              <li>< hr class="dropdown-divider"/></li>
              <li><Link class="nav-link" to="/ListarEmpleados">Usuario</Link></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true"></a>
          </li>
        </ul>
        <span class="navbar-text">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-person-fill"></i>
            </button>
            <ul class="dropdown-menu">
              <li>
                <Link class="dropdown-item" to="/">
                  Login
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/Registrar">
                  Registarse
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="#">
                  Cerrar sesión
                </Link>
              </li>
            </ul>
          </div>
        </span>
      </div>
    </div>
  </nav>
);
}

export default Barramenu
