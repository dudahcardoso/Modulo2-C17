let page = 1;

const locationList = document.querySelector("#locations-list");

async function getLocations() {
  const resp = await fetch(
    `https://rickandmortyapi.com/api/location?page=${page}`
  );
  const data = await resp.json();
  //console.log(data);

  data.results.forEach((location) => {
    locationList.insertAdjacentHTML("beforeend", 
    `
    <div class="card">
    <img class="planet" src="https://thumbs.dreamstime.com/b/mundo-terra-do-planeta-modelo-global-isolado-no-fundo-branco-elementos-desta-imagem-fornecidos-pela-nasa-136878303.jpg">
    <h2>${location.name}</h2>

    <div class="details">
    <h4>ID</h4>
    <p>${location.id}</p>
    <h4>Tipo</h4>
    <p>${location.type}</p>
    <h4>Dimensão</h4>
    <p>${location.dimension}</p>
    <h4>População</h4>
    <p>${location.residents.length}</p>    
    </div>
    </div>
    `)

    //console.log(location);
  });

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseover", function(event){
        getCardElement(event).style.display = "block";
  });

  card.addEventListener("mouseleave", function(event){
    getCardElement(event).style.display = "none";
  })
  });

  //evento do passar o mouse no card
  function getCardElement(evento){
    const cardElement = evento.path.filter((item) => item.className === "card");
    console.log(cardElement);
    const details= cardElement[0].children[2];
    return details;    
  }
}
getLocations();

//paginação
function viewMore(){
    page++;
    getLocations();
}

//scroll infinito
window.addEventListener("scroll", function(){
    const {scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight - 200){
        viewMore();
    }
})
