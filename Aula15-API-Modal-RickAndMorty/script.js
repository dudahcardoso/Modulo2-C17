//declarou a variavel page globalmente porque as funções precisam acessar ela
let page = 1;

//DADOS PARA O MODAL
const modalImage = document.querySelector("#modal-image");
const modalName = document.querySelector("#modal-name");
const modalSpecies = document.querySelector("#modal-species");
const modalGender = document.querySelector("#modal-gender");
const modalOrigin = document.querySelector("#modal-origin");
const modalLocation = document.querySelector("#modal-location");
const modalStatus = document.querySelector("#modal-status");
//MODAL

async function getCharacters(){
    const resposta = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);

    const data = await resposta.json();
    //console.log(data.results); //vizualizou somente o array results que está com os personagens

    // data.results.forEach(index => {
    //  console.log(index)
    // });
    //varremos o array result para ver os itens que continham nele

    data.results.forEach(function (character) {
        document.querySelector("#character-list").insertAdjacentHTML('beforeend',
        `
        <div class="card">
            <img class="image-character" src=${character.image}>

            <div>
                <h2 class="name-character">${character.name}</h2>
                <p class="species-character">${character.species}</p>
                <h4>Gender</h4>
                <p class="species-character">${character.gender}</p>
                <h4>Origin</h4>
                <p class="species-character">${character.origin.name}</p>
                <span class="character-id">${character.id}</span>
            </div>
        </div>
        `
        );//pegou a div do html e só passou os dados itnerados no arrayy
        // console.log(character.image);
    });

    //MODAL
    const cards = document.querySelectorAll(".card");
    //console.log(cards);
    //array com 20 cards, acessando o children eu tenho a img e a div, abrindo a div, a gente acessa o children, e lá tem o nome, species e tec, e acessando o children deles a gente acessa o InnnerHTML ou Inner Text e ali tem os dados 

    const modal = document.querySelector("#modal-overlay");
    //precisamos alterar os dados do modal cada vez que ele for clicado

    //iterar os dados do card, card por card
    cards.forEach((card) => {
        //verificar se o card que eu quero foi clicado
        card.addEventListener("click", async function (event){
            //console.log(event); //evento para o clique do card
            //precisamos acessar o path e filtrar os items
            //filter é uma função de array, descubrir o item que possui a className
            const cardElement = event.path.filter((item) => item.className == "card");
            //console.log(cardElement);
            //children

            //trazer o número do ID
            const idCard = cardElement[0].children[1].children[6].innerHTML;
            //console.log(idCard);

            const resp = await fetch(
                `https://rickandmortyapi.com/api/character/${idCard}`
            );
            const data = await resp.json();//ver todos os dados do personagem
            //console.log(data);

        })
    })












}
getCharacters();

//paginação simples usando button
function viewMore(){
    page++;
    getCharacters();
    console.log(page);
}
//viewMore();

//paginação infinita
// window.addEventListener("scroll", function (){
//     const {scrollTop, scrollHeight, clientHeight } = document.documentElement;
//     //desestruturou os objetos que vem do DOM, lembrando que o DOM é uma grande lista

//     if(scrollTop + clientHeight >= scrollHeight - 300){
//         viewMore();
//     }
// });