const btnAdd = document.querySelector("#addBtn");//pega o botão no DOM

//Cria um evento de click para o botão e executa a function anônima abaixo
btnAdd.addEventListener("click", function (){
    const li = document.createElement("li");//criou elemento novo li
    const inputValue = document.querySelector("#myInput").value;//pega o texto digitado no input
    const taskText = document.createTextNode(inputValue);//adiciona o texto da minha tarefa na taskText
    li.appendChild(taskText);//adiciono o meu texto na li

    //verificação se está em branco o input
    if(inputValue === ""){
        alert("Você deve digitar alguma tarefa.");
    }else{
        document.getElementById("myUL").appendChild(li);//adiciona a li como filha da ul e ele encaixa a minha li na ul
    }

    //zerar o valor do input
    document.querySelector("#myInput").value = "";

    //botão fechar/apagar
    const span = document.createElement("span");//cria um elemento span
    const icon = document.createTextNode("\u00D7");
    span.className = "close";//adiciona um texto no HTML com o ícone de x de fechar
    span.appendChild(icon);//insere o icon na span
    li.appendChild(span);//insere a span na li criada

    //apagar a tarefa definitivamente
    const close = document.querySelectorAll(".close");//pega todas as spans de fechar
    //varre a lista de spans e faz a verificação uma por uma, e vê e qual foi a clicada
    for(let i = 0; i < close.length; i++){
        close[i].addEventListener("click", function (){
            const li = this.parentElement;//pega o parente e o nesse caso é element é a li
            li.style.display ="none";//muda o display para none fazendo ele sumir da tela
        });
    };      
});//termina a função anonima

//check na tarefa
    const list = document.querySelector("ul");//captura a lista inteira, vai pegar a ul inteira

    //adicionando um evento de click
    list.addEventListener("click", (evento) => {
        //dentro da minha target tudo que tiver o nome nodeName==LI
        if(evento.target.nodeName === "LI")
        //estrutura: event.target.nodeName != "CHECKBOX" 
        {
            evento.target.classList.toggle("checked");//vai ser adicionado como checked, togle é para armar e desarmar evento
        }
    });
