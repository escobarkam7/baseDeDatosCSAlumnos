// 1.- Crear un prototipo alumno, el cual debe incluir:
// Nombre
// Apellidos
// Edad
// Materias inscritas
// Calificaciones
// (Este es el prototipo base, si quieren agregarle mas datos son libres de hacerlo tan completo como quieran)

class Alumno {

    constructor(nombre, apellidos, edad, materias, calificaciones){
        this.name = nombre;
        this.surname = apellidos;
        this.age = edad;
        this.classes = materias;
        this.marks = calificaciones;
    }

}



// 2.- Alta de alumnos
// Una vez creado el prototipo desde su sitio, deberán dar de alta alumnos, por defecto lo único que deben pedir como requisito al inicio es nombre, apellidos, edad.







// 3.- Después deberas crear funciones y vistas que les ayuden a hacer lo siguiente:
// Inscribir un alumno a una clase.
// Asignarle sus calificaciones.
// Crear grupos y asignarle alumnos (Usen estructuras de datos).





// 4.- Ya que tengan sus grupos con alumnos, deberán crear e implementar las siguientes funciones:
// Buscar por nombre.
// Buscar por apellido.
// Obtener promedio de un alumno.
// Obtener promedio del grupo.
// Obtener lista de alumnos ordenados ascendente y descendente por calificación.
// Con los datos almacenados en el prototipo agregar otro ordenamiento o búsqueda bajo el parámetro que quieran (Este es el punto extra).