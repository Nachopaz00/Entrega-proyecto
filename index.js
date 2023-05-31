var notas = []; // Array para almacenar las notas ingresadas
var opcion;

while (opcion !== "6") {
    opcion = prompt("Ingrese una opción:\n1. Ingresar nombre y nota\n2. Mostrar promedio de notas\n3. Mostrar cantidad de aprobados \n4. Mostrar cantidad de notas ingresadas\n6. Salir");

    switch (opcion) {
        case "1":
            var nombre = prompt("Ingrese el nombre del alumno:");
            var nota = parseFloat(prompt("Ingrese la nota del alumno:"));
            notas.push(nota);
            alert("Nombre: " + nombre + ", Nota: " + nota + " ingresados correctamente.");
            break;

        case "2":
            if (notas.length === 0) {
                alert("No se han ingresado notas.");
            } else {
                var sum = 0;
                for (var i = 0; i < notas.length; i++) {
                    sum += notas[i];
                }
                var promedio = sum / notas.length;
                alert("El promedio de las notas es: " + promedio.toFixed(2));
            }
            break;

        case "3":
            var contadorNotasAltas = 0;
            for (var i = 0; i < notas.length; i++) {
                if (notas[i] >= 7) {
                    contadorNotasAltas++;
                }
            }
            alert("Cantidad de notas mayores o iguales a 7: " + contadorNotasAltas);
            break;

        case "4":
            alert("Cantidad de notas ingresadas: " + notas.length);
            break;

        case "6":
            alert("Saliendo del programa...");
            break;

        default:
            alert("Opción no válida. Por favor, ingrese una opción válida.");
            break;
    }
}
