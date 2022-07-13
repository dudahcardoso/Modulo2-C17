// function getAdvice(){
//     alert("olá");
// }
//não acontece nada pois precisa chamar a função

// alert("Olá 1");
//JavaScript executa linha a linha

//getAdvice();
//executa a função

//forma de buscar os dados na API tem que ser de forma ASSINCRONA utilizando o ASYNC
async function getAdvice(){
    const resposta = await fetch("https://api.adviceslip.com/advice");
    //criou uma constante resposta que está guardando os dados que vem da API
    //console.log(resposta);

    const data = await resposta.json();
    //transformando em JSON a resposta que está guardando os dados da API
    //console.log(data);
    
    //está selecionando o DOM e colocando o dado que vem da API em formato JSON
    //console.log(data.slip.advice);
    //traz somente a frase

    document.querySelector("#frase").innerText = data.slip.advice;
    //data.slip.advice é o caminho para acessar o valor do objeto
}
//getAdvice();

//button funcionando
const btnGetAdvice = document.querySelector("#get-advice");

btnGetAdvice.addEventListener("click", function (){
    getAdvice();
})