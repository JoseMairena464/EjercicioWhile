function menu() {
    let opcionSeleccionada = prompt(`
        Escoja una opción para continuar
            0. Salir
            1. Registro de Ventas
            2. Conversión de Divisas
            3. Cálculo de Intereses
    `);

    while (opcionSeleccionada !== "0") {
        switch (opcionSeleccionada) {
            case "1":
                registroVentas();
                break;
            case "2":
                conversionDivisas();
                break;
            case "3":
                calculoIntereses();
                break;
            default:
                alert("Opción incorrecta");
                break;
        }

        opcionSeleccionada = prompt(`
            Escoja una opción para continuar
                0. Salir
                1. Registro de Ventas
                2. Conversión de Divisas
                3. Cálculo de Intereses
        `);
    }

    alert("Adiós!");
}

function registroVentas() {
    let total = 0;
    let continuar;
    do {
        let precio = parseFloat(prompt("Ingrese el precio del producto:"));
        let cantidad = parseInt(prompt("Ingrese la cantidad vendida:"));
        total += precio * cantidad;
        continuar = prompt("¿Desea ingresar otro producto? (s/n)") === "s";
    } while (continuar);
    alert("Total de ventas: Q" + total.toFixed(2));
}

function conversionDivisas() {
    let tipoCambioUSD = parseFloat(prompt("Ingrese el tipo de cambio de USD a Q:"));
    let tipoCambioEUR = parseFloat(prompt("Ingrese el tipo de cambio de EUR a Q:"));
    let moneda = prompt("Ingrese la moneda de origen (USD/EUR):").toUpperCase();
    let monto = parseFloat(prompt("Ingrese el monto a convertir:"));
    let resultado = moneda === "USD" ? monto * tipoCambioUSD : monto * tipoCambioEUR;
    alert("Monto convertido: Q" + resultado.toFixed(2));
}

function calculoIntereses() {
    const costoStand = 300;
    const interesDiario = 0.02;
    let cantidadStands = parseInt(prompt("Ingrese la cantidad de stands rentados:"));
    let diasRetraso = parseInt(prompt("Ingrese los días de retraso en la devolución:"));
    
    if (diasRetraso <= 2) {
        alert("No hay mora. Total a pagar: Q" + (cantidadStands * costoStand));
    } else {
        let mora = cantidadStands * costoStand * Math.pow(1 + interesDiario, diasRetraso - 2);
        alert("Total a pagar con mora: Q" + mora.toFixed(2));
    }
}

menu();