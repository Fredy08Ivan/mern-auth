import React from "react";
//import{useFormik} from "formik";
//import { initialValues,validationShema } from ".//Fromproductod.form";

function Almuerzo() {
  return (
    <div class="bg-success p-2 text-dark bg-opacity-50 border border-success border border-5">
    <div className="container-fluid">
      <div className="row">
        <center>
          <br/>
          {/*<form class="d-flex" role="search" onsubmit="return validateSearchForm()">
  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="searchInput" required />
  <button class="btn btn-outline-success" type="submit">Search</button>
</form>  */}
 <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
   
      <br/>
    
          <h3 className="display-4"> ALMUERZOS</h3>
        </center>
        <br/>
        <br/>
        <br/>
        <div className="col-sm-6 mb-3 mb-0">
          <div class="card  bg-success p-2 text-dark bg-opacity-25 border border-success-subtle border border-5">
            <center>
              <img
                className="Almuerzo"
                src={process.env.PUBLIC_URL + "/imagen/" + "aguacate.jpg"}
                width="250px"
                height="200px"
              />
            </center>
            <div class="card-body">
              <h5 class="card-title">Wrap de Pavo y Aguacate</h5>
              <p class="card-text">
                <br/>Ingredientes:
                <br/>*Tortilla de trigo integral.
                <br/>*Pavo en lonchas delgadas.
                <br/>*Aguacate en rodajas.
                <br/>*Lechuga y tomate.
                <br/>*Mostaza o yogur como aderezo.

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
        <div class="card  bg-success p-2 text-dark bg-opacity-25 border border-success-subtle border border-5">
            <center>
              <img
                className="Almuerzo"
                src={process.env.PUBLIC_URL + "/imagen/" + "asados.jpg"}
                width="250px"
                height="200px"
              />
            </center>
            <div class="card-body">
              <h5 class="card-title">Bowl de Quinoa con Vegetales Asadoso</h5>
              <p class="card-text">
              <br/>Ingredientes:
              <br/>*Quinoa cocida.
              <br/>*Brócoli, zanahorias y calabacín asados.
              <br/>*Garbanzos asados.
              <br/>*Aguacate en cubos.
              <br/>*Aderezo de tahini o aceite de oliva.
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
        <div class="card  bg-success p-2 text-dark bg-opacity-25 border border-success-subtle border border-5">
            <center>
              <img
                className="Almuerzo"
                src={process.env.PUBLIC_URL + "/imagen/" + "lenteja.jpg"}
                width="250px"
                height="200px"
              />
            </center>
            <div class="card-body">
              <h5 class="card-title">Sopa de Lentejas con Verduras</h5>
              <p class="card-text">
              <br/>Ingredientes:
              <br/>*Lentejas cocidas.
              <br/>*Zanahorias, apio y cebolla picados.
              <br/>*Caldo de verduras.
              <br/>*Tomate triturado.
              <br/>*Especias como comino, ajo y pimentón.
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
        <div class="card  bg-success p-2 text-dark bg-opacity-25 border border-success-subtle border border-5">
            <center>
              <img
                className="Almuerzo"
                src={process.env.PUBLIC_URL + "/imagen/" + "ghj.jpg"}
                width="250px"
                height="200px"
              />
            </center>
            <div class="card-body">
              <h5 class="card-title">Tacos de Pollo con Salsa de Mango</h5>
              <p class="card-text">
              <br/>
              <br/>Ingredientes:
              <br/>*Pechugas de pollo a la parrilla con condimentos mexicanos.
              <br/>*Tortillas de maíz.
              <br/>*Repollo rallado, cilantro y cebolla morada.
              <br/>*Salsa de mango fresco.
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
        <div class="card  bg-success p-2 text-dark bg-opacity-25 border border-success-subtle border border-5">
            <center>
              <img
                className="Almuerzo"
                src={process.env.PUBLIC_URL + "/imagen/" + "arroz.jpg"}
                width="250px"
                height="200px"
              />
            </center>
            <div class="card-body">
              <h5 class="card-title">Arroz Frito con Tofu y Verduras</h5>
              <p class="card-text">
              <br/>Ingredientes:
              <br/>*Arroz integral.
              <br/>*Tofu salteado con salsa de soja.
              <br/>*Verduras (zanahorias, guisantes, brócoli).
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
          <div class="card  bg-success p-2 text-dark bg-opacity-25">
            <center>
              <img
                className="Almuerzo"
                src={process.env.PUBLIC_URL + "/imagen/" + "burgue.jpg"}
                width="250px"
                height="200px"
              />
            </center>
            <div class="card-body">
              <h5 class="card-title">Hamburguesas de Pavo con Aguacate</h5>
              <p class="card-text">
              <br/>Ingredientes:
              <br/>*Hamburguesas de pavo a la parrilla.
              <br/>*Pan integral.
              <br/>*Rodajas de aguacate, tomate y lechuga.
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
        <div class="card  bg-success p-2 text-dark bg-opacity-25 border border-success-subtle border border-5">
            <center>
              <img
                className="Almuerzo"
                src={process.env.PUBLIC_URL + "/imagen/" + "lasaña.jpg"}
                width="250px"
                height="200px"
              />
            </center>
            <div class="card-body">
              <h5 class="card-title"> Lasaña de Berenjenas</h5>
              <p class="card-text">
              <br/>Ingredientes:
              <br/>* Berenjenas en rodajas finas.
              <br/>*Salsa de tomate, queso ricotta y espinacas.
              <br/>*Capas alternas y al horno.
              </p>
            </div>

            <div class="card-body">
              <button href="#" class="btn btn-info">
                <i class="bi bi-star"></i> &nbsp; Favoritos
              </button>
              &nbsp;
              
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-0">
        <div class="card  bg-success p-2 text-dark bg-opacity-25 border border-success-subtle border border-5">
            <center>
              <img
                className="Almuerzo"
                src={process.env.PUBLIC_URL + "/imagen/" + "camaron.jpg"}
                width="250px"
                height="200px"
              />
            </center>
            <div class="card-body">
              <h5 class="card-title">Salteado de Camarones con Brócoli</h5>
              <p class="card-text">
              <br/>Ingredientes:
              <br/>* Camarones salteados con ajo y limón.
              <br/>*Brócoli al vapor.
              <br/>*Arroz integral.
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

export default Almuerzo;
