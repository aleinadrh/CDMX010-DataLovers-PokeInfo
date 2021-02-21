// Variables
let totalData = "";
const root = document.querySelector("#root");
const perfilPage = document.getElementsByClassName("card-img");


//Data
window.onload = fetcheame;

function fetcheame() {
  fetch("data/pokemon/pokemon.json")
    .then(data => data.json())
    .then(data => {

      totalData = data;
      cargando();

    })
}

//Mostrar Pokemones
function principalPage(totalData) {
  root.innerHTML = "";
  
  document.getElementById("myChart").style.display = "none"
  document.getElementById("myChart1").style.display = "none";
  document.getElementById("root").style.display = "flex";
 

  for (let i of totalData) {
    root.innerHTML += `
                    <div class = "card"
                    style = "width: 10rem;" >
                        <div class = "card-body" >
                        <h5 class = "card-title" > ${i.name} </h5> 
                        <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                        <p class = "card-text" > <img class = "card-img"
                    src = "${i.img}"
                    alt = "Card ${i.name}"> </p> 
                    </div> </div>`;
    modal(totalData)
  }
}

// FIltrado

document.getElementById("filtered-type").addEventListener("change", (evento) => {
  evento.preventDefault();
  let conditionType = document.getElementById("filtered-type").value;
  principalPage(window.pokemones.pokeFilter(totalData.pokemon, conditionType));


}
)


// Ordenado
document.getElementById("order-pokemon").addEventListener("change", (event) => {
  event.preventDefault();
  root.innerHTML = ""
  
  document.getElementById("myChart").style.display = "none"
  document.getElementById("myChart1").style.display = "none";
  if (document.getElementById("order-pokemon").value === "az") {
    for (let i of window.pokemones.orderAZ(totalData.pokemon, "name", "az")) {
      root.innerHTML += `
            <div class = "card"
            style = "width: 10rem;" >
                <div class = "card-body" >
                <h5 class = "card-title" > ${i.name} </h5> 
                <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                <p class = "card-text" > <img class ="card-img"
            src = "${i.img}"
            alt = "Card ${i.name}"> </p> 
            </div> </div>
             `;
      modal(window.pokemones.orderAZ(totalData.pokemon, "name", "az"))
    }
  }
  if (document.getElementById("order-pokemon").value === "za") {
    for (let i of window.pokemones.orderZA(totalData.pokemon, "name", "za")) {
      root.innerHTML += `
                <div class = "card"
                style = "width: 10rem;" >
                    <div class = "card-body" >
                    <h5 class = "card-title" > ${i.name} </h5> 
                    <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                    <p class = "card-text" > <img class ="card-img"
                src = "${i.img}"
                alt = "Card ${i.name}"> </p> 
                </div> </div>
                 `;
      modal(window.pokemones.orderZA(totalData.pokemon, "name", "za"))
    }
  }

})
//  Modal
function modal(data) {
  for (let i = 0; i < perfilPage.length; i++) {
    perfilPage[i].addEventListener("click", () => {
      document.getElementById("modal").innerHTML = "";
      document.getElementById("modal").style.display = "block"
      console.log(data[i].candy);
      document.getElementById("modal").innerHTML += `
                            <!-- Modal -->
                  <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog modal-lg">
                    
                      <!-- Modal content-->
                      <div class="modal-content">
                        <div class="modal-header">
                         <h4 class="modal-title">${data[i].name}</h4>
                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
                         </div>
                        <div class="modal-body">
                        <div class="row">
                        <div class="col-6 col-md-4"><img id="modalImg" class = "card-img"
                        src = "${data[i].img}"
                        alt = "Card ${data[i].name}"></div>
                        <div class="col-12 col-md-8">
                        <div class="card" style="width: 18rem;">
                         <p class="list-group-item"><strong>N° : </strong>#${data[i].num} </p>
                         <p class="list-group-item"><strong>Candy: </strong>${data[i].evolution.candy} </p
                         <p class="list-group-item"> <strong>Tipo : </strong><br>
                          <span class = "${data[i].type[0]}">${data[i].type[0]},</span>
                          <span class = "${data[i].type[1]}">${data[i].type[1]}</span> </p>
                         <p class="list-group-item"><strong>Debilidades: </strong> <br>
                          <span class = "${data[i].weaknesses[0]}">${data[i].weaknesses[0]} </span>
                          <span "${data[i].weaknesses[1]}">${data[i].weaknesses[1]} </span>
                          <span "${data[i].weaknesses[2]}">${data[i].weaknesses[2]} </span>
                          <span "${data[i].weaknesses[3]}">${data[i].weaknesses[3]} </span>
                          <span "${data[i].weaknesses[4]}">${data[i].weaknesses[4]} </span>
                         
                          
                         </p>
                        </div> </div></div>
                        <br>
                        <table class="table">
                        <thead class="table">
                        <tr>
                        <th class" table table-head text-center" scope="col">Peso </th>
                        <th class"table table-head text-center" scope="col">Talla</th>
                        <th class"table table-head text-center" scope="col"> Spawn <br> Chance</th>
                        <th class"table table-head text-center" scope="col">Tiempo <br> Aparición</th>
                        <th class"table table-head text-center" scope="col">Km por Huevo</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <td>${data[i].size.weight}</td>
                        <td>${data[i].size.height}</td>
                        <td>${data[i]['spawn-chance']} </td>
                        <td>${data[i][spawn_time]}</td>
                        <td>${data[i].egg}</td>
                        </tr>
                        </tbody>
                        </table>
                        </div> 
                                                              
                        <div class="modal-footer">
                       
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  </div>`;
      window.$("#myModal").modal();
    })
  }
}


//  Botón Buscar 

document.getElementById("searching").addEventListener("click", () => {
  let conditionSearch = document.getElementById("search-imput").value
  principalPage(window.pokemones.pokeSearch(totalData.pokemon, conditionSearch))
})

 


//Estadistica

document.getElementById("statistics").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("root").style.display = "none"
  document.getElementById("myChart").style.display = "block"
  document.getElementById("myChart1").style.display = "block"
  graficPercentage(totalData.pokemon)
  graficWeaknesses(totalData.pokemon)

})

function graficPercentage() {
  var ctx = document.getElementById('myChart').getContext('2d');
   new window.Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ["Planta", "Veneno", "Fuego", "Volador", "Agua", "Tierra", "Normal", "Eléctrico", "Insecto", "Psíquico", "Dragón", "Lucha", "Hielo", "Roca", "Fantasma"],
      datasets: [{
        label: "% de Pokemones",
        backgroundColor: ["#00541a",
          "#930077",
          "#f12d2d",
          "#9bbfab",
          "#75cac3",
          "#a96851",
          "#b1bed5",
          "#f89d13",
          "#729d39",
          "#1a3263",
          "#f5564e",
          "#5f685a",
          "#43c0ac",
          "#c7b198",
          "#5c3b6f"
        ],
        data: [window.pokemones.computePokemon(totalData.pokemon, "grass"), window.pokemones.computePokemon(totalData.pokemon, "poison"), window.pokemones.computePokemon(totalData.pokemon, "fire"), window.pokemones.computePokemon(totalData.pokemon, "flying"), window.pokemones.computePokemon(totalData.pokemon, "water"), window.pokemones.computePokemon(totalData.pokemon, "ground"), window.pokemones.computePokemon(totalData.pokemon, "normal"), window.pokemones.computePokemon(totalData.pokemon, "electric"), window.pokemones.computePokemon(totalData.pokemon, "bug"), window.pokemones.computePokemon(totalData.pokemon, "psychic"), window.pokemones.computePokemon(totalData.pokemon, "dragon"), window.pokemones.computePokemon(totalData.pokemon, "fighting"), window.pokemones.computePokemon(totalData.pokemon, "ice"), window.pokemones.computePokemon(totalData.pokemon, "rock"), window.pokemones.computePokemon(totalData.pokemon, "ghost")],
      }]
    },

    // Configuration options go here
    options: {
      title: {
        display: true,
        text: "% DE POKEMONES POR CATEGORÍAS"
      },
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }]
      }
    }

  });
  
}


function graficWeaknesses() {
  var ctx = document.getElementById('myChart1').getContext('2d');
  new window.Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ["Planta", "Veneno", "Fuego", "Volador", "Agua", "Tierra", "Normal", "Eléctrico", "Insecto", "Psíquico", "Dragón", "Lucha", "Hielo", "Roca", "Fantasma", "Hada", "Acero", "Oscuro"],
      datasets: [{
        label: "Cantidad de Pokemones",
        backgroundColor: ["#00541a",
          "#930077",
          "#f12d2d",
          "#9bbfab",
          "#75cac3",
          "#a96851",
          "#b1bed5",
          "#f89d13",
          "#729d39",
          "#1a3263",
          "#f5564e",
          "#5f685a",
          "#43c0ac",
          "#c7b198",
          "#5c3b6f",
          "#f59aa3",
          "#373331",
          "#000000"
        ],
        data: [window.pokemones.pokemonWeaknesses(totalData.pokemon, "grass"), window.pokemones.pokemonWeaknesses(totalData.pokemon, "poison"), window.pokemones.pokemonWeaknesses(totalData.pokemon, "fire"), window.pokemones.pokemonWeaknesses(totalData.pokemon, "flying"), window.pokemones.pokemonWeaknesses(totalData.pokemon, "water"), window.pokemones.pokemonWeaknesses(totalData.pokemon, "ground"), window.pokemones.pokemonWeaknesses(totalData.pokemon, "normal"), window.pokemones.pokemonWeaknesses(totalData.pokemon, "electric"), window.pokemones.pokemonWeaknesses(totalData.pokemon, "bug"), window.pokemones.pokemonWeaknesses(totalData.pokemon, "psychic"), window.pokemones.pokemonWeaknesses(totalData.pokemon, "dragon"), window.pokemones.pokemonWeaknesses(totalData.pokemon, "fighting"), window.pokemones.pokemonWeaknesses(totalData.pokemon, "ice"), window.pokemones.pokemonWeaknesses(totalData.pokemon, "rock"), window.pokemones.pokemonWeaknesses(totalData.pokemon, "ghost"),window.pokemones.pokemonWeaknesses(totalData.pokemon, "fairy"),window.pokemones.pokemonWeaknesses(totalData.pokemon, "steel"),window.pokemones.pokemonWeaknesses(totalData.pokemon, "dark")],
      }]
    },

    // Configuration options go here
    options: {
      title: {
        display: true,
        text: "CANTIDAD DE POKEMONES POR DEBILIDAD"
      },
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }]
      }
    }

  });
 
}

function cargando() {
  principalPage(totalData.pokemon)
}