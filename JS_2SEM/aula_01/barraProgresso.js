//declarar variavel e atribuir valor,para esconder a barra de progresso 

var BarraProgresso = document.querySelector(".progress");
BarraProgresso.style.display = "none";

function animarBarraProgresso() {
    var progresso = 0;
    var barra = document.querySelector(".progress-bar")
    BarraProgresso.style.display = "block";


    var intervalo = setInterval(function()
    {
        if(progresso > 100){
            //limpar valor variavel 
            clearInterval(intervalo);
            BarraProgresso.style.display = "none";
            document.querySelector("#mostrar").innerHTML = `<div class="alert alert-success fade show" role="alert">
            <span> ola,bv ao sesi </span>
            <button type = "button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
            `
        }else{
            document.querySelector(".progress-bar").innerHTML= `${progresso}%`;
            progresso++;
            barra.style.width = progresso + "%";
        }
    }, 50);
}