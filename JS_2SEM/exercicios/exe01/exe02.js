const botao1 = document.querySelector("#adicionar");
const botao2 = document.querySelector("#diminuir");
const botao3 = document.querySelector("#zerar");
const contadorElemento = document.querySelector("#contador");

let contador = 0;

function aumentarContador(){
    contador++;
    contadorElemento.textContent = contador;
}

botao1.addEventListener("click", aumentarContador);

function diminuirContador(){
    if(contador <= 0){
        alert("nao pode ser menor que zero");
   }else{
    contador--;
   }
    contadorElemento.textContent = contador;
}

botao2.addEventListener("click", diminuirContador);


function zerarContador(){
    contador = 0;
    contadorElemento.textContent = contador;
}

botao3.addEventListener("click", zerarContador);