var nombreLocalStore = "Estudiantes"

function recuperarDatosFormulario() {

    var Identificacion = document.getElementById("Identificacion")
    var Nombres = document.getElementById("Nombres")
    var Apellidos = document.getElementById("Apellidos")
    var FechaNacimiento = document.getElementById("FechaNacimiento")
    var email = document.getElementById("email")

}
function limpiarFormulario() {

    Identificacion.value = ""
    Nombres.value = ""
    Apellidos.value = ""
    FechaNacimiento.value = ""
    email.value = ""

}

function guardar() {
    recuperarDatosFormulario();

    var Estudiantes = getJSONDeLocalStore(nombreLocalStore);

    var indiceExistente = buscarIndiceEstudiantes();

    if (indiceExistente > -1) {
        alert("La identificación ya está registrada. Por favor, ingrese una identificación única.");
        return;
    }

    var estudiante = new Estudiante(Identificacion.value, Nombres.value, Apellidos.value, FechaNacimiento.value, email.value);

    Estudiantes.push(estudiante);

    setJSONDeLocalStore(nombreLocalStore, Estudiantes);

    limpiarFormulario();

    alert("Estudiante guardado correctamente");
    console.log(Estudiantes);
}
function buscarIndiceEstudiantes() {
    var Estudiantes = getJSONDeLocalStore(nombreLocalStore);
    var resultado = -1;

    for (let i = 0; i < Estudiantes.length; i++) {
        if (Estudiantes[i].Identificacion == Identificacion.value) {
            resultado = i;
            break;
        }
    }

    return resultado;
}

function consultar() {

    recuperarDatosFormulario()

    this.Estudiantes = getJSONDeLocalStore(nombreLocalStore)

    var indiceEstudiantes = buscarIndiceEstudiantes()

    if (indiceEstudiantes > -1) {
        Nombres.value = Estudiantes[indiceEstudiantes].Nombres
        Apellidos.value = Estudiantes[indiceEstudiantes].Apellidos
        FechaNacimiento.value = Estudiantes[indiceEstudiantes].FechaNacimiento
        email.value = Estudiantes[indiceEstudiantes].email
    }


}

function actualizar() {

    recuperarDatosFormulario();

    var Estudiantes = getJSONDeLocalStore(nombreLocalStore);

    var indiceEstudiantes = buscarIndiceEstudiantes(Identificacion.value);

    if (indiceEstudiantes > -1) {
        Estudiantes[indiceEstudiantes].Nombres = Nombres.value;
        Estudiantes[indiceEstudiantes].Apellidos = Apellidos.value;
        Estudiantes[indiceEstudiantes].email = email.value;

        setJSONDeLocalStore(nombreLocalStore, Estudiantes);

        limpiarFormulario();

        alert("Estudiante ha sido actualizado correctamente");
    } else {

        alert("No se encontró un estudiante con esa identificación.");
    }
}

function eliminar() {
    var Estudiantes = getJSONDeLocalStore(nombreLocalStore);

    recuperarDatosFormulario();

    var indiceEstudiantes = buscarIndiceEstudiantes(Identificacion.value);

    if (indiceEstudiantes > -1) {
        alert("Estudiante " + Estudiantes[indiceEstudiantes].Identificacion + " eliminado");

        Estudiantes.splice(indiceEstudiantes, 1);

        setJSONDeLocalStore(nombreLocalStore, Estudiantes);

        limpiarFormulario();
    } else {
        alert("No se encontró un estudiante con esa identificación.");
    }
}