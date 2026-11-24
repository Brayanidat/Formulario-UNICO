let pagoFinal;
function imprimir() {
    //OBTENER DATOS
    let cliente = document.getElementById("cliente").value.toUpperCase();
    let direccion = document.getElementById("direccion").value.toUpperCase();
    let telefono = Number(document.getElementById("telefono").value);
    let Mpago = document.getElementById("pago").value;
    let OrdenN = document.getElementById("n").value;
    let ruc = document.getElementById("ruc").value.toUpperCase();
    let ciudad = document.getElementById("ciudad").value.toUpperCase();
    let articulo = document.getElementById("articulo").value;
    let cantidad = document.getElementById("cantidad").value;

    //CONDICIONES
    if (isNaN(telefono)) {
        alert("Solo se permiten numeros en TELEFONO");
        return;
    }

    let nombreArticulo;
    let precio;

    if (articulo == "op1") {
        precio = 45;
        nombreArticulo = "Teclado";
    } else if (articulo == "op2") {
        precio = 87;
        nombreArticulo = "Case";
    } else if (articulo == "op3") {
        precio = 30;
        nombreArticulo = "Mouse";
    } else if (articulo == "op4") {
        precio = 489;
        nombreArticulo = "Impresora";
    } else if (articulo == "op5") {
        precio = 120;
        nombreArticulo = "Parlante";
    } else if (articulo == "op6") {
        precio = 58;
        nombreArticulo = "USB 64GB";
    }


    if (Mpago === "credito") {
        pagoFinal = (precio * cantidad) * 1.25;
    } else if (Mpago === "contado") {
        pagoFinal = precio * cantidad
    }

    //SALIDA DE DATO
    document.getElementById("resultado").innerHTML = `
    ===========FACTURA========= <br>
    N° : ${OrdenN} <br><br>
    CLIENTE : ${cliente}<br>
    DIRECCION : ${direccion}<br>
    TELEFONO : ${telefono} <br>
    RUC : ${ruc}<br>
    CIUDAD : ${ciudad}<br><br>
    ARTICULO : ${nombreArticulo.toLocaleUpperCase()}<br>
    PRECIO : S/ ${precio} <br>
    CANTIDAD : ${cantidad}<br>
    IMPORTE DE COMPRA : S/ ${pagoFinal.toFixed(2)}<br>
    METODO DE PAGO : ${Mpago.toLocaleUpperCase()}`

}

function limpiar() {
    document.getElementById("n").value = "";
    document.getElementById("cliente").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("pago").value = "";
    document.getElementById("ruc").value = "";
    document.getElementById("ciudad").value = "";
    document.getElementById("articulo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("n").focus();
    document.getElementById("resultado").innerHTML = " ";
}

function vuelto() {
    let pagoAdquirido = document.getElementById("dineroAdd").value;

    if (isNaN(pagoAdquirido)) {
        alert("Solo se aceptan valores numericos")
    }
    if (pagoAdquirido < pagoFinal) {
        alert("Pago incorrecto");
        return;
    } 

    vuelto = pagoAdquirido - pagoFinal;
    
    let mensaje = confirm("DESEA COMFIRMAR LA COMPRA");

    if (!mensaje) {
        return;
    }

    alert(`Vuelto : ${vuelto.toFixed(2)}`);
}

function borrar() {
    document.getElementById("dineroAdd").value = "";
    document.getElementById("dineroAdd").focus();
}