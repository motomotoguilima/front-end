var BarraProgresso = document.querySelector(".progress");
BarraProgresso.style.display = "none";

function animarBarraProgresso() {
    var nome = document.querySelector("#inp").value;
    var idade = document.querySelector("#inp1").value;
    var cidade = document.querySelector("#inp2").value;

    if(nome == "" || idade == "" || cidade == "" ){
        exibirAlertadeErro("preencha todos os campos vazios")
        return
    }
    if (idade > 190)
    {
        exibirAlertadeErro("coloque uma idade menor")
        return
    }
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
                <div class="d-flex justify-content-between">
                    <span> informaçoes ${nome} ${idade} ${cidade} </span>
                    <button type = "button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            </div>
            `
        }else{
            document.querySelector(".progress-bar").innerHTML= `${progresso}%`;
            progresso++;
            barra.style.width = progresso + "%";
        }
    }, 20);
}
function exibirAlertadeErro(texto){
    document.querySelector("#mostrar").innerHTML = `<div class="alert alert-danger fade show" role="alert">
        <div class="d-flex justify-content-between">
            <span> ${texto} </span>
            <button type = "button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    </div>`
}