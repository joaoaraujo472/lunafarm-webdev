function trocarTema(tema) {

    document.body.classList.remove(
        "tema-claro",
        "tema-contraste",
        "tema-escuro"
    );

    if (tema === "claro") {

        document.body.classList.add("tema-claro");

    } else if (tema === "contraste") {

        document.body.classList.add("tema-contraste");

    } else {

        document.body.classList.add("tema-escuro");
    }
}