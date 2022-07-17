window.onload = function(){
    alert("Olá mundo do JavaScript para Web!!!!!!")
};

const btnTexto = document.querySelector("#btn-text");
//capturou o botão no DOM pelo id

btnTexto.addEventListener("click", function(){
    //adicionei um evento de click no botão que é capturado e assim que for clicado, executa a função
    const tagH1 = document.createElement("h1");//criou uma tag h1 e adicionou na variável tagH1
    const h1Text = document.createTextNode("Texto criado pelo JavaScript que é um lindo");
    //criou um texto e adiciou a variável h1Text

    document.body.appendChild(tagH1);
    //adicionei a tag H1 no meu body

    tagH1.appendChild(h1Text);
    //adicionei na tag H1 o texto de H1text
});

const titulo = document.querySelector("#titulo");

titulo.addEventListener("mouseover", function(){
    titulo.style.color = "green";
});

titulo.addEventListener("mouseout", function(){
    titulo.style.color = "black";
});
