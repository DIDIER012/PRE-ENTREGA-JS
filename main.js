// TIENDA DE ROPA 

const compraDePrendas = () => {
    let prenda = '';
    let cantidad = 0;
    let precio = 0;
    let precioTotal = 0;
    let seguirComprando = false;


do {
    prenda = prompt ("¿que clase de prenda deseas comprar buzo, remeras o pantalones?");
    cantidad = validarCantidad(parseInt(prompt ("¿cuantos deseas llevar?")));

    let cantidadTotal = cantidad;


    switch (prenda) {
        case 'buzo': 
            precio = 20000;
            break;
        case'remeras':
            precio = 30000
            break;
        case 'pantalones':
            precio = 15000
            break;
        default: 
        alert("hay un error a la hora de ingresar los prodectos o no se encentra en stock");
        precio = 0;
        cantidad = 0;
    }

    precioTotal += precio * cantidadTotal;
    seguirComprando = confirm("¿Querés agregar otra prenda?");
    } while (seguirComprando);

    return precioTotal;
}
    const validarCantidad = (cantidad) => {
        while (Number.isNaN(cantidad) || cantidad === 0) {
            if (cantidad !== 0) {
                alert('Debe agregar un numero')
            } else{ 
                alert ('Debe agregar un numero distinto a cero')
        }
        cantidad = parseInt(prompt("¿Cuántos querés comprar?"))
    }
    return cantidad;
    };


const Descuento = precioTotal => {
    if (precioTotal >= 15000) {
        return alert("tienes un descuento de" + (precioTotal * 0.10).toString());
    } else {
        return precioTotal;
    }
}

let precioTotal = compraDePrendas();
precioTotal = Descuento(precioTotal);

if (confirm("¿Quieres envío a domicilio o retiras del local?")) {
    precioTotal += 2000;
    alert("El costo total es de " + precioTotal + " más $2000 de envío a domicilio.");
} else {
    alert("El horario de atención es de 8 a 12 y de 16 a 21 horas");
}