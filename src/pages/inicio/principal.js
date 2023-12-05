import React from "react";
import { Link } from "react-router-dom";
//import { imagenes } from "../imagenes/index,js";

function principal() { 
  return (
    <center>
      <div class="bg-success p-2 text-dark bg-opacity-50 border border-primary-subtle border border-5">
      <div className="col-4 p-4">
        <h1 class="display-3">Bienvenido</h1>
        <h1 class="display-4">NiceFood</h1>
      </div>

      <div className="row align-items-center">
        <div className="col">
        <div class="card p-3 mb-2 bg-success p-2 text-dark bg-opacity-50 border border-success-subtle border border-5">
            <center>
            <img
              className="Desayuno"
              src={process.env.PUBLIC_URL + "/imagen/" + "desayuno.jpg"}
              width="250px"
              height="200px"
            />
            </center>
            <div class="card-body">
              <h5 class="card-title">Desayuno</h5>
              <p class="card-text">
                Huevo a la mexicana
              </p>
              <Link to="/desayuno" class="btn btn-primary">
                Ir
              </Link>
            </div>
          </div>
        </div>

        <div className="col">
        <div class="card p-3 mb-2 bg-success p-2 text-dark bg-opacity-50 border border-success-subtle border border-5">
            <center>
            <img
              className="Almuerzo"
              src={process.env.PUBLIC_URL + "/imagen/" + "almuerzo.jpg"}
              width="250px"
              height="200px"
            />
            </center>
            <div class="card-body">
              <h5 class="card-title">Almuerzo</h5>
              <p class="card-text">
                Pescado frits
              </p>
              <Link to="/almuerzo" class="btn btn-primary">
                Ir
              </Link>
            </div>
          </div>
        </div>

        <div className="col">
        <div class="card p-3 mb-2 bg-success p-2 text-dark bg-opacity-50 border border-success-subtle border border-5">
            <center>
            <img
              className="Cena"
              src={process.env.PUBLIC_URL + "/imagen/" + "cena.jpg"}
              width="250px"
              height="200px"
            />
            </center>
            <div class="card-body">
              <h5 class="card-title">Cena</h5>
              <p class="card-text">
               Empanizado de pollo
              </p>
              <Link to="/cena" class="btn btn-primary">
                Ir
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br/>

      <div className="row align-items-center">
        <div className="col">
        <div class="card p-3 mb-2 bg-success p-2 text-dark bg-opacity-50 border border-success-subtle border border-5">
            <center>
            <img
              className="Desayuno"
              src={process.env.PUBLIC_URL + "/imagen/" + "desayuno2.jpg"}
              width="250px"
              height="200px"
            />
            </center>
            <div class="card-body">
              <h5 class="card-title">Desayuno</h5>
              <p class="card-text">
              Huevo con frijol
              </p>
              <Link to="/desayuno2" class="btn btn-primary">
                Ir
              </Link>
            </div>
          </div>
        </div>

        <div className="col">
        <div class="card p-3 mb-2 bg-success p-2 text-dark bg-opacity-50 border border-success-subtle border border-5">
            <center>
            <img
              className="Almuerzo"
              src={process.env.PUBLIC_URL + "/imagen/" + "almuerzo2.jpg"}
              width="250px"
              height="200px"
            />
            </center>
            <div class="card-body">
              <h5 class="card-title">Almuerzo</h5>
              <p class="card-text">
                Ensalada de camarón
              </p>
              <Link to="/almuerzo2" class="btn btn-primary">
                Ir
              </Link>
            </div>
          </div>
        </div>

        <div className="col">
          <div class="card p-3 mb-2 bg-success p-2 text-dark bg-opacity-50 border border-success-subtle border border-5">
            <center>
            <img
              className="cena"
              src={process.env.PUBLIC_URL + "/imagen/" + "cena2.jpg"}
              width="250px"
              height="200px"
            />
            </center>
            <div class="card-body">
              <h5 class="card-title">Cena</h5>
              <p class="card-text">
               Ensaladas de frutas
              </p>
              <Link to="/cena2" class="btn btn-primary ">
                Ir
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>

    </center>
  );
}

export default principal;
