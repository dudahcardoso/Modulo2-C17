async function getCharacters(){
    const resposta = await fetch("https://rickandmortyapi.com/api/character");

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

            </div>
        </div>
        `
        )//pegou a div do html e só passou os dados itnerados no arrayy
        // console.log(character.image);
    })
}
getCharacters();