console.table(productos);

function Constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
}

const array = [];

// Prompt para 3 valores
while (true) {
    const id = prompt('Id: ');
    const nombre = prompt('Producto: ');
    const precio = parseFloat(prompt('Precio: '));

    if (id == 0 && nombre == 0 && precio == 0) {
        break;
    }

    const constructor = new Constructor(id, nombre, precio);

    array.push(constructor);
}

console.table(array);

const total = array.reduce((acumulador, producto) => {
    return acumulador + producto.precio;
}, 0);

console.log(total);
alert("el monto total de tu compra es $ " + total);

console.log(total * 1.19);
alert("el monto total con IVA de tu compra es $ " + total * 1.19);

alert("Muchas gracias por su compra, vuelva pronto!!!");