const botao = document.querySelector("#botao");
const contadorElemento = document.querySelector("#contador");


//inicializando contador
let contador = 0;

function aumentarContador(){
    contador++;
    contadorElemento.textContent = contador;
}

//adicionando ouvinte do evento para clique do botao

botao.addEventListener("click", aumentarContador);