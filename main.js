document.getElementById("cotizacion").addEventListener("click", function() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; 

    const cuotasInput = document.createElement("input");
    cuotasInput.setAttribute("type", "number");
    cuotasInput.setAttribute("placeholder", "Cuotas: 12, 24, 36 o 48");
    const valorInput = document.createElement("input");
    valorInput.setAttribute("type", "number");
    valorInput.setAttribute("placeholder", "Valor del automóvil en dólares");
    const calcularButton = document.createElement("button");
    calcularButton.textContent = "Calcular";

    outputDiv.appendChild(cuotasInput);
    outputDiv.appendChild(valorInput);
    outputDiv.appendChild(calcularButton);

    calcularButton.addEventListener("click", function() {
        const cuotas = parseInt(cuotasInput.value);
        const valor = parseInt(valorInput.value);

        const calcularInteres = (valor, porcentaje) => {
            return (valor * porcentaje) / 100;
        };

        const calcularCuotas = (prestamo, cuotas) => {
            return prestamo / cuotas;
        };

        if (isNaN(cuotas) || (cuotas !== 12 && cuotas !== 24 && cuotas !== 36 && cuotas !== 48)) {
            outputDiv.innerHTML += "<p>Tienes que elegir una de las 4 opciones de cuotas: 12, 24, 36 o 48</p>";
        } else if (!isNaN(valor)) {
            let porcentaje;
            let cuotasStr;
            if (cuotas === 12) {
                porcentaje = 7;
                cuotasStr = "12 meses";
            } else if (cuotas === 24) {
                porcentaje = 12;
                cuotasStr = "24 meses";
            } else if (cuotas === 36) {
                porcentaje = 15;
                cuotasStr = "36 meses";
            } else if (cuotas === 48) {
                porcentaje = 20;
                cuotasStr = "48 meses";
            }

            let interes = calcularInteres(valor, porcentaje);
            let totalPrestamo = valor + interes;
            let valorCuota = calcularCuotas(totalPrestamo, cuotas);
            outputDiv.innerHTML += `<p>El valor de cada cuota sería de: ${valorCuota} dólares a pagar en ${cuotasStr}</p>`;
        } else {
            outputDiv.innerHTML += "<p>Ingresa un valor válido para el automóvil.</p>";
        }
    }); 
}); 
function mostrarListaEnDOM(lista) {
    const listaDiv = document.getElementById("listaAutos");
    listaDiv.innerHTML = "";

    if (lista.length === 0) {
        listaDiv.innerHTML = "<p>No hay autos disponibles.</p>";
        return;
    }

    const listaHTML = lista.map(auto => `<p>Modelo: ${auto.modelo}, Precio: ${auto.precio} dólares, Color: ${auto.disponibles}</p>`).join("");
    listaDiv.innerHTML = listaHTML;
}

const Auto = function(modelo, precio, disponibles) {
    this.modelo = modelo;
    this.precio = precio;
    this.disponibles = disponibles;
};


let auto1 = new Auto("chevrolet corsa", 5500, "rojo");
let auto2 = new Auto("fiat uno", 4500, "azul");
let auto3 = new Auto("toyota corolla", 7000, "gris plata");
let auto4 = new Auto("honda civic", 7500, "blanco");
let auto5 = new Auto("volkswagen gol", 6500, "negro");
let auto6 = new Auto("peugeot 307", 8000, "bordo");
let auto7 = new Auto("volkswagen vento", 10000, "gris nardo");
let auto8 = new Auto("peugeot 206", 6000, "rojo");

let lista = [auto1, auto2, auto3, auto4, auto5, auto6, auto7, auto8];

function filtrarAuto() {
    let busquedausuario = prompt("Ingrese aquí el auto que desea buscar");
    let resultadobusqueda = lista.filter(auto => auto.modelo.includes(busquedausuario));

    mostrarListaEnDOM(resultadobusqueda);
}


document.getElementById("filtrarAuto").addEventListener("click", filtrarAuto);


function agregarAuto() {
    let modelo = prompt("Ingresa la marca seguida del modelo");
    let precio = parseInt(prompt("Ingresa el precio en dólares que deseas vender tu auto"));
    let color = prompt("Ingresa el color de tu auto");

    if (modelo === "" || isNaN(precio) || color === "") {
        
    } else {
        let auto = new Auto(modelo, precio, color);
        lista.push(auto);
        mostrarListaEnDOM(lista); 
    }
}

document.getElementById("agregarAuto").addEventListener("click", agregarAuto);