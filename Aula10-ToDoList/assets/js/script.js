const addBtn = document.querySelector("#addBtn");//criou uma variável, acessou o document que é o meu DOM do HMTL e pegou as propriedades dp meu button e guardou na variável criada (pegou o botão no DOM)

//criar um evento de click para o botão executar a função do click do usuário
addBtn.addEventListener("click",  () => {
    const li = document.createElement("li");//criação da li na minha lista vazia
    const inputValue = document.querySelector("#myInput").value;//peguei o valor digitado pelo meu usuário e coloquei na variável criada
    const taskText = document.createTextNode(inputValue); //adicionou o texto digitado pelo usuário na taskText
    li.appendChild(taskText);//adicionei na minha tag <li>o valor que veio digitado pelu usuário</li>

    //verificar se o input não está em branco
    if(inputValue === ""){
        alert("Você deve digitar uma tarefa!")
    }else{
        document.querySelector("#myUL").appendChild(li);//adicionou a li como filha de ul
    }

    //zerar o valor do input
    document.querySelector("#myInput").value = "";

    //incluir o simbolo de X na li
    const span = document.createElement("span");//criei um elemento html span
    const icon = document.createTextNode("\u00D7");//criação do símbolo X pelo JS
    span.className = "close";
    span.appendChild(icon);//inseri o icone na span
    li.appendChild(span);//inseri a span em li

    //apagar a tarefa
    const close = document.querySelectorAll(".close");//utilizamos o select ALL para pegar TODAS as spans criadas
    for(let i = 0; i < close.length; i++){
        close[i].addEventListener("click", function (){
            const li = this.parentElement;//pega o parente e nesse caso é o elemento li
            li.style.display = "none";//mudar o display para none fazendo ele sumir da tela
        });
    };
});//termina a função addBtn

//check na tarefa
const list = document.querySelector("ul");//capturei a lista inteira para pegar a ul toda

list.addEventListener("click", (event) => {
    //dentro da minha target tudo que tover o nome node==LI
    if(event.target.nodeName === "LI")
    //estrutura pronta do JS: event.target.nodeName == "CHECKBOX"
    {
        event.target.classList.toggle("checked");//adiciona o checked na li e o togle desarma o cheked
    }
});