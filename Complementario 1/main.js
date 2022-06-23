function pedirDatos() {
    let nombre = prompt("Hola como estas? Ingrese su nombre");
    alert("Hola " + nombre + " , espero que estes bien , bienvenido a la pagina web de Raymundo Full Shop , presione Enter o Aceptar para continuar");
    let articulos = prompt(nombre +" que articulo estas buscando? ingrese el numero de el producto para poder derivarlo a un asesor directo! 1-Libreria , 2-Jugueteria , 3-Corte laser en mdf")
    if(articulos == 1){
        alert("Para articulos de Libreria , comunicarse al 3415039494 , o ingresar en nuestra pagina de instagram , @Diserhome")
    } else if (articulos == 2){
        alert("Para productos de jugueteria , seguinos en instagram y enterate de todas las novedades , @RustikoFullShop")
    } else if ( articulos == 3) {
        alert("Para productos en corte laser de madera fibro facil , podes comunicarte al 3415693995 o seguirnos en instagram , @Diserhome")
    } else {
        alert("Por favor , ingrese un numero valido.")
    }
    
}

pedirDatos()