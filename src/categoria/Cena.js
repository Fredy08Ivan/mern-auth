import React from "react";

function Cena() {
  return (
    <div class=" bg-success bg-dark-subtle border border-secondary-subtle border border-5">
    <div className="container-fluid">
      <div className="row">
        <center>
        <br/>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <br/>
          <h3 className="display-4"> CENAS</h3>
        </center>
        <br/>
        <br/>
        <br/>
        <div className="col-sm-6 mb-3 mb-0">
          <div class="card bg-success p-2 text-dark bg-opacity-25 border border-success-subtle border border-5">
            <center>
              <img
                className=" Cena"
                src={process.env.PUBLIC_URL + "/imagen/" + "ensalada de pollos.jpg"}
                width="250px"
                height="200px"
              />
            </center>
            <div class="card-body">
              <h5 class="card-title">Pollo a la Parrilla con Ensalada.</h5>
              <p class="card-text">
                <br/> Ingredientes:
                
                  <br/>*Pechugas de pollo a la parrilla con hierbas.
                  <br/>*Ensalada de quinoa con tomate cherry, pepino, aguacate y aderezo de limón.
              </p>
            </div>

            <div class="card-body">
            <center><button href="#" class="btn btn-info">
                <i class="bi bi-star"></i> &nbsp; Favoritos
              </button> 
              </center>
              &nbsp;
              
             
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-0">
        <div class="card bg-success p-2 text-dark bg-opacity-25 border border-success-subtle border border-5">
            <center>
              <img
                className=" Cena"
                src={process.env.PUBLIC_URL + "/imagen/" + "OIP.jpg"}
                width="250px"
                height="200px"
              />
            </center>
            <div class="card-body">
              <h5 class="card-title">Salmón al Horno con Espárragos</h5>
              <p class="card-text">
              <br/>Ingredientes:
              <br/>* Filetes de salmón al horno con limón y eneldo.
              <br/>*Espárragos asados con aceite de oliva y ajo.
              </p>
            </div>

            <div class="card-body">
            <center><button href="#" class="btn btn-info">
                <i class="bi bi-star"></i> &nbsp; Favoritos
              </button> 
              </center>
              &nbsp;
             
                
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-0">
        <div class="card bg-success p-2 text-dark bg-opacity-25 border border-success-subtle border border-5">
            <center>
              <img
                className=" Cena"
                src={process.env.PUBLIC_URL + "/imagen/" + "pasta.jpg"}
                width="250px"
                height="200px"
              />
            </center>
            <div class="card-body">
              <h5 class="card-title">Pasta Integral con Pesto de Albahaca y Tomate</h5>
              <p class="card-text">
                <br/>Ingredientes:
                <br/>*Pasta integral cocida.
                <br/>*Pesto fresco de albahaca con piñones y parmesano.
                <br/>*Tomates cherry cortados por la mitad.
             
              </p>
            </div>

            <div class="card-body">
            <center><button href="#" class="btn btn-info">
                <i class="bi bi-star"></i> &nbsp; Favoritos
              </button> 
              </center>
              &nbsp;
              
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-0">
        <div class="card bg-success p-2 text-dark bg-opacity-25 border border-success-subtle border border-5">
            <center>
              <img
                className=" Cena"
                src={process.env.PUBLIC_URL + "/imagen/" + "casera.jpg"}
                width="250px"
                height="200px"
              />
            </center>
            <div class="card-body">
              <h5 class="card-title">Ensalada de Pollo Caesar</h5>
              <p class="card-text">
              <br/> Ingredientes:
              <br/>
              <br/>*Pechugas de pollo a la parrilla.
              <br/>*Lechuga romana, crutones integrales, queso parmesano y aderezo Caesar ligero.
              </p>
            </div>

            <div class="card-body">
            <center><button href="#" class="btn btn-info">
                <i class="bi bi-star"></i> &nbsp; Favoritos
              </button> 
              </center>
              &nbsp;
             
                 
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-0">
        <div class="card bg-success p-2 text-dark bg-opacity-25 border border-success-subtle border border-5">
            <center>
              <img
                className=" Cena"
                src={process.env.PUBLIC_URL + "/imagen/" + "tacos.jpg"}
                width="250px"
                height="200px"
              />
            </center>
            <div class="card-body">
              <h5 class="card-title">Tacos de Pescado con Salsa de Aguacate</h5>
              <p class="card-text">
            <br/> Ingredientes:
            <br/>
            <br/>
            <br/>* Tacos de pescado a la parrilla con condimentos.
            <br/>*Salsa de aguacate con cilantro, limón y ajo.
            <br/>*Tortillas de maíz.
              </p>
            </div>

            <div class="card-body">
            <center><button href="#" class="btn btn-info">
                <i class="bi bi-star"></i> &nbsp; Favoritos
              </button> 
              </center>
              &nbsp;
              
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-0">
        <div class="card bg-success p-2 text-dark bg-opacity-25 border border-success-subtle border border-5">
            <center>
              <img
                className=" Cena"
                src={process.env.PUBLIC_URL + "/imagen/" +"burrito.jpg"}
                width="250px"
                height="200px"
              />
            </center>
            <div class="card-body">
              <h5 class="card-title">Bowl de Burrito Saludable</h5>
              <p class="card-text">
                <br/>Ingredientes:
                <br/>*Arroz integral.
                <br/>*Frijoles negros.
                <br/>*Pico de gallo fresco.
                <br/>*Aguacate en rodajas.
                <br/>*Pollo a la parrilla o tofu para proteínas.
            
              
              </p>
            </div>

            <div class="card-body">
            <center><button href="#" class="btn btn-info">
                <i class="bi bi-star"></i> &nbsp; Favoritos
              </button> 
              </center>
              &nbsp;
             
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-0">
        <div class="card bg-success p-2 text-dark bg-opacity-25 border border-success-subtle border border-5">
            <center>
              <img
                className=" Cena"
                src={process.env.PUBLIC_URL + "/imagen/" + "guiso.jpg"}
                width="250px"
                height="200px"
              />
            </center>
            <div class="card-body">
              <h5 class="card-title">Vegetales al Curry con Garbanzos</h5>
              <p class="card-text">
                <br/>Ingredientes:
                <br/>
                <br/>*Curry de vegetales y garbanzos.
                <br/>*Quinoa o arroz integral como base.
              </p>
            </div>

            <div class="card-body">
            <center><button href="#" class="btn btn-info">
                <i class="bi bi-star"></i> &nbsp; Favoritos
              </button> 
              </center>
              &nbsp;
             
             
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-0">
        <div class="card bg-success p-2 text-dark bg-opacity-25 border border-success-subtle border border-5">
            <center>
              <img
                className=" Cena"
                src={process.env.PUBLIC_URL + "/imagen/" + "espinaca.jpg"}
                width="250px"
                height="200px"
              />
            </center>
            <div class="card-body">
              <h5 class="card-title">Omelette de Espinacas y Queso Feta</h5>
              <p class="card-text">
                <br/>Ingredientes

                <br/>*Huevos batidos con espinacas frescas.
                <br/>*Queso feta desmenuzado.
                <br/>*Tomates cherry cortados por la mitad.
              </p>
            </div>

            <div class="card-body">
            <center><button href="#" class="btn btn-info">
                <i class="bi bi-star"></i> &nbsp; Favoritos
              </button> 
              </center>
              &nbsp;
             
                
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cena;
