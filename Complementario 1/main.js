
//ARRAY JUGUETES Y CORTE LASER , Y CONSTRUCTOR DE PRODUCTOS

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = [];
productos.push(new Producto("Lapiz", 70));
productos.push(new Producto("Reglas", 60));
productos.push(new Producto("Plasticolas", 100));
productos.push(new Producto("Fotocopias", 10));
productos.push(new Producto("Viromes", 90));
productos.push(new Producto("Fibras", 250));
productos.push(new Producto("Crayones", 270));

console.table(productos);

/*CONSULTA PARA TUTOR! , hola gian , este constructor , mi idea era utilizarlo para mostrarlo por pantalla con document.write , o alert , pero me aparecen como "Object.object" , en consola sale todo bien pero en pantalla no :( , en cambio los de aqui abajo no , salen bien tanto en alert como en document.write*/


const juguetes = ["Muñecos", "Barbies", "Autitos", "Rompecabezas", "Juegos de mesa", "Squishis", "Slime"];
console.log(juguetes);

const corteLaser = ["Souvenirs", "Llaveros", "Cuadros", "Bandejas", "Servilleteros", "Carteles Personalizados", "Portaretratos"]
console.log(corteLaser);

// Funcion con los arrays incorporados

function pedirDatos() {
    let nombre = prompt("Hola como estas? Ingrese su nombre");
    alert("Hola " + nombre + " , espero que estes bien , bienvenido a la pagina web de Raymundo Full Shop , presione Enter o Aceptar para continuar");
    let articulos = prompt(nombre +" que articulo estas buscando? ingrese el numero de el producto para poder derivarlo a un asesor directo! 1-Libreria , 2-Jugueteria , 3-Corte laser en mdf")
    if(articulos == 1){
        alert("Para articulos de Libreria , comunicarse al 3415039494 , o ingresar en nuestra pagina de instagram , @Diserhome")
        document.write(productos)
    } else if (articulos == 2){
        alert("Para productos de jugueteria , seguinos en instagram y enterate de todas las novedades , @RustikoFullShop , igualmente te dejamos escrito en pantalla algunos de nuestros juguetes mas vendidos")
        document.write(juguetes)
    } else if ( articulos == 3) {
        alert("Para productos en corte laser de madera fibro facil , podes comunicarte al 3415693995 o seguirnos en instagram , @Diserhome , igualmente te dejamos escrito en pantalla algunos de nuestros articulos mas vendidos")
        document.write(corteLaser)
    } else {
        alert("Por favor , ingrese un numero valido.")
    }
}
pedirDatos()

