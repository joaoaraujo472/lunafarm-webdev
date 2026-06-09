const camposObrigatorios = [
    "operador",
    "temperatura",
    "umidade"
];

function validarFormulario() {

    let valido = true;

    for (let i = 0; i < camposObrigatorios.length; i++) {

        const campo = document.getElementById(
            camposObrigatorios[i]
        );

        if (campo.value.trim() === "") {

            valido = false;

            campo.style.border =
                "2px solid red";

        } else {

            campo.style.border =
                "2px solid green";
        }
    }

    return valido;
}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const formulario =
            document.getElementById(
                "form-parametros"
            );

        formulario.addEventListener(
            "submit",
            (evento) => {

                evento.preventDefault();

                if (validarFormulario()) {

                    document.getElementById(
                        "form-sucesso"
                    ).innerHTML = `
                        Cadastro realizado com sucesso!
                    `;

                    formulario.reset();

                } else {

                    document.getElementById(
                        "form-sucesso"
                    ).innerHTML = `
                        Preencha todos os campos.
                    `;
                }
            }
        );
    }
);