// Contador de turnos , una vez llegado al turno numero 10 se corta el cupo.
for (let i = 1; i <= 10; i++) {
   
    let ingresarNombre = prompt("Ingresar nombre y apellido");
    
    alert(" Turno  N° "+i+" Nombre del solicitante: "+ingresarNombre);
    if(i === 10){
        alert("Ya no hay mas turnos , por favor vuelva a nuevamente mañana y capaz tengamos nuevos turnos disponibles");
        break;
    }
}
