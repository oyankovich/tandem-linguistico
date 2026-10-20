import { intercambios } from '../data.js'

const container = document.getElementById("contenedorTarjetas");
const buttons = document.querySelectorAll("[data-filtro]");

function crearTarjeta(item) {
    const col = document.createElement("div");
    col.className = "col-12 col-lg-4 mb-4";

    const tarjeta = document.createElement("div");
    tarjeta.className = `card h-100 ${item.tipo}`;

    const contenido = document.createElement("div");
    contenido.className = "card-body";

    const titulo = document.createElement("h5");
    titulo.className = "tituloTarjeta";
    titulo.textContent = item.tipo === "oferta" ? "Oferta" : "Petición";
    contenido.appendChild(titulo);

    const campos = [
        ["Idioma", item.idioma],
        ["Nivel", item.nivel],
        ["Modalidad", item.modalidad],
    ];

    for (const [etiqueta, valor] of campos) {
        const p = document.createElement("p");
        p.className = "card-text mb-1";
        const strong = document.createElement("strong");
        strong.textContent = etiqueta + ": ";
        p.append(strong, valor);
        contenido.appendChild(p);
    }

    tarjeta.appendChild(contenido);
    col.appendChild(tarjeta);
    return col;
}

function showContent(lista) {
    container.innerHTML = "";
    lista.forEach((item) => container.appendChild(crearTarjeta(item)));
}

showContent(intercambios);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const filtro = button.dataset.filtro;
        const lista =
            filtro === "todos"
                ? intercambios
                : intercambios.filter((i) => i.tipo === filtro);
        showContent(lista);
    });
});

