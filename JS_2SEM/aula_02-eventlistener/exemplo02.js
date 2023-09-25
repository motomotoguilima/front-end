const visor = document.querySelector("#visor");

//adicionando um ouvinte do evento para keyudowm no documento

document.addEventListener("keydown", (event) =>
    {
        if (event.key === "a" || event.key === "A") {
            visor.textContent = "tecla A pressionado";

        } else if (event.key === "d" || event.key === "D") {
            visor.textContent = "tecla D pressionado";
        }
        //visor.textContent =event.key
    });