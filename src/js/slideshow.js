// Selecionando elementos do DOM

const slides = document.querySelectorAll(".slide");
const btnAnterior = document.getElementById("btn-anterior");
const btnProximo = document.getElementById("btn-proximo");
const indicadores = document.getElementById("indicadores");

let indiceAtual = 0;

// Criar indicadores dinamicamente usando FOR

for (let i = 0; i < slides.length; i++) {

    const ponto = document.createElement("span");

    ponto.classList.add("ponto");

    if (i === 0) {
        ponto.classList.add("ativo");
    }

    ponto.addEventListener("click", () => {
        irParaSlide(i);
    });

    indicadores.appendChild(ponto);
}

// Mostrar slide

function mostrarSlide(indice) {

    slides.forEach(slide => {
        slide.classList.remove("ativo");
    });

    document.querySelectorAll(".ponto").forEach(ponto => {
        ponto.classList.remove("ativo");
    });

    slides[indice].classList.add("ativo");

    document.querySelectorAll(".ponto")[indice]
        .classList.add("ativo");
}

// Ir para slide específico

function irParaSlide(indice) {
    indiceAtual = indice;
    mostrarSlide(indiceAtual);
}

// Próximo slide

btnProximo.addEventListener("click", () => {

    indiceAtual++;

    if (indiceAtual >= slides.length) {
        indiceAtual = 0;
    }

    mostrarSlide(indiceAtual);
});

// Slide anterior

btnAnterior.addEventListener("click", () => {

    indiceAtual--;

    if (indiceAtual < 0) {
        indiceAtual = slides.length - 1;
    }

    mostrarSlide(indiceAtual);
});

// Avanço automático

setInterval(() => {

    indiceAtual++;

    if (indiceAtual >= slides.length) {
        indiceAtual = 0;
    }

    mostrarSlide(indiceAtual);

},  4000);