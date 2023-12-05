import React from "react";

function Desayuno() {
  return (
    <div class="p-3 mb-2 bg-warning-subtle border border-warning-subtle border border-5">
      <div className="container-fluid">
        <div className="row">
          <center>
            <br />
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <br />
            <h3 className="display-4"> DESAYUNOS</h3>
          </center>
          <br />
          <br />
          <br />
          <div className="col-sm-6 mb-3 mb-0">
            <div class="card p-3 mb-2 bg-warning-subtle text-emphasis-warning border border-5">
              <center>
                <img
                  className="Desayuno"
                  src={process.env.PUBLIC_URL + "/imagen/" + "desayuno.jpg"}
                  width="250px"
                  height="200px"
                />
              </center>
              <div class="card-body">
                <h5 class="card-title">Huevo a la mexicana</h5>
                <p class="card-text">
                  El huevo a la mexicana es un platillo delicioso y fácil de
                  preparar. Aquí tienes una receta básica:
                  <br />
                  <br />
                  <br /> Ingredientes:
                  <br /> * Huevos
                  <br />* Tomates medianos, picados en cubos pequeños
                  <br /> * Cebolla, finamente picada
                  <br /> * Chile verde (puedes ajustar la cantidad según tu
                  preferencia de picante), picado en trozos pequeños
                  <br />* Diente de ajo, picado finamente
                  <br />* Sal y pimienta al gusto
                  <br />* Aceite vegetal
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
          <div class="card p-3 mb-2 bg-warning-subtle text-emphasis-warning border border-5">
              <center>
                <img
                  className="Desayuno"
                  src={process.env.PUBLIC_URL + "/imagen/" + "omelette.jpg"}
                  width="250px"
                  height="200px"
                />
              </center>
              <div class="card-body">
                <h5 class="card-title">omelette</h5>
                <p class="card-text"> Preparar un omelette es una opción deliciosa y versátil para el desayuno. Recuerda que puedes personalizarlo según tus preferencias.
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                Ingredientes:
                <br/>* Huevos: 2 a 3 huevos, dependiendo del tamaño del omelette que desees.
                <br/>*Sal y Pimienta: Al gusto.
                <br/>*Aceite o Mantequilla:
                <br/>*Queso: Queso rallado (chédar, suizo, mozzarella, feta, etc.).
                <br/>* Vegetales: Tomates, espinacas, champiñones, cebollas, pimientos, espárragos, etc.
                
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
          <div class="card p-3 mb-2 bg-warning-subtle text-emphasis-warning border border-5">
              <center>
                <img
                  className="Desayuno"
                  src={process.env.PUBLIC_URL + "/imagen/" + "desayuno3.jpg"}
                  width="250px"
                  height="200px"
                />
              </center>
              <div class="card-body">
                <h5 class="card-title">Panucho</h5>
                <p class="card-text">  <br /><br/>Ingredientes:
                <br/>*Masa de Maíz: 2 tazas de masa de maíz para tortillas
                <br/>-Agua (la cantidad necesaria para formar una masa suave).
                <br/>*Sal: Al gusto.
                <br/>*Frijoles Refritos:
                <br/>-1 taza de frijoles negros o bayos cocidos y refritos.
                <br/>*Pollo Pibil:
<br/>*Lechuga Picada:
<br/>*Aguacate en Rodajas.
<br/>*Salsa de Tomate o Salsa Habanera
<br/>*Cebolla Morada en Rodajas Finas:
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
          <div class="card p-3 mb-2 bg-warning-subtle text-emphasis-warning border border-5">
              <center>
                <img
                  className="Desayuno"
                  src={process.env.PUBLIC_URL + "/imagen/" + "desayuno4.jpg"}
                  width="250px"
                  height="200px"
                />
              </center>
              <div class="card-body">
                <h5 class="card-title">Tamale de chipilin</h5>
                <p class="card-text">
                  <br />
                  <br/>
                  <br/>
                  <br/>
                  Ingredientes:
                  <br />* 2 tazas de masa de maíz, 1 taza de manteca de cerdo o
                  aceite vegetal, 1 taza de caldo de pollo o agua, 1 cucharadita
                  de polvo de hornear, 1 cucharadita de sal.
                  <br />
                  *2 tazas de hojas de chipilí
                  <br />
                  *1/2 cebolla
                  <br />
                  *2 dientes de ajo
                  <br />
                  *2 cucharadas de aceite vegetal
                  <br />* Pollo
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
          <div class="card p-3 mb-2 bg-warning-subtle text-emphasis-warning border border-5">
              <center>
                <img
                  className="Desayuno"
                  src={process.env.PUBLIC_URL + "/imagen/" + "desayuno5.jpg"}
                  width="250px"
                  height="200px"
                />
              </center>
              <div class="card-body">
                <h5 class="card-title">Huevo con jamón</h5>
                <p class="card-text"> <br/>Ingredientes:
                Preparar una ensalada con frutas frescas es una opción saludable y deliciosaHuevo.
                <br/>
                <br/>*jamón
                <br/>*Frijol
                <br/>*Platanitos Favoritos
                <br/>*Queso</p>
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
          <div class="card p-3 mb-2 bg-warning-subtle text-emphasis-warning border border-5">
              <center>
                <img
                  className="Desayuno"
                  src={process.env.PUBLIC_URL + "/imagen/" + "Ensalada .jpg"}
                  width="250px"
                  height="200px"
                />
              </center>
              <div class="card-body">
                <h5 class="card-title">Ensalada de frutas</h5>
                <p class="card-text">Preparar una ensalada con frutas frescas es una opción saludable y deliciosa
                <br/>Ingredientes:
                <br/>*Fresas:

1 taza, lavadas y cortadas.
<br/>*Uvas:

1 taza, cortadas por la mitad.
<br/>*Piña:

1 taza, cortada en trozos.
<br/>*Kiwi:

2 kiwis, pelados y cortados en rodajas.
<br/>*Mango:

1 mango, pelado y cortado en cubos.
<br/>*Naranjas o Mandarinas:

2 naranjas o mandarinas, peladas y segmentadas.</p>
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
          <div class="card p-3 mb-2 bg-warning-subtle text-emphasis-warning border border-5">
              <center>
                <img
                  className="Desayuno"
                  src={process.env.PUBLIC_URL + "/imagen/" + "desayuno7.jpg"}
                  width="250px"
                  height="200px"
                />
              </center>
              <div class="card-body">
                <h5 class="card-title">Desayuno</h5>
                <p class="card-text">prepara tu desayuno</p>
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
          <div class="card p-3 mb-2 bg-warning-subtle text-emphasis-warning border border-5">
              <center>
                <img
                  className="Desayuno"
                  src={process.env.PUBLIC_URL + "/imagen/" + "desayuno8.jpg"}
                  width="250px"
                  height="200px"
                />
              </center>
              <div class="card-body">
                <h5 class="card-title">Desayuno</h5>
                <p class="card-text">prepara tu desayuno</p>
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

export default Desayuno;
