var nombreLocalStore = "Programas"

function recuperarDatosFormulario() {
    var codigo = document.getElementById('codigo')
    var nombre = document.getElementById('nombre')
    var duracion = document.getElementById('duracion')
    var modalidad = document.getElementById('modalidad')

}
function limpiarFormulario() {
    codigo.value = ""
    nombre.value = ""
    duracion.value = ""
    modalidad.value = ""

}

function buscarindiceProgramas() {

    var resultado = -1

    for (let i = 0; i < programas.length; i++) {

        if (programas[i].Identificacion ==  codigo.value) {

            resultado = i
        }

    }

    return resultado

}

function guardarPrograma() {

     recuperarDatosFormulario()

    programa = new Programa(codigo.value, nombre.value, duracion.value, modalidad.value)

    var programas = getJSONDeLocalStore(nombreLocalStore)

    programas.push(programa)

    setJSONDeLocalStore(nombreLocalStore, programas)

    limpiarFormulario()

    alert("Programa guardado correctamente")

    console.log(programas)
}

function consultarProgramas() {

    recuperarDatosFormulario()

    this.programas = getJSONDeLocalStore(nombreLocalStore)

    var indiceprogramas = buscarindiceProgramas()

    if (indiceprogramas > -1) {
        codigo.value = programas[indiceprogramas].codigo
        nombre.value = programas[indiceprogramas].nombre
        duracion.value = programas[indiceprogramas].duracion
        modalidad.value = programas[indiceprogramas].modalidad
    }


}

function actualizarPrograma() {

    recuperarDatosFormulario()

    this.programas = getJSONDeLocalStore(nombreLocalStore)

    var indiceprogramas = buscarindiceProgramas()

    if (indiceprogramas > -1) {

        Estudiantes[indiceprogramas].nombres =  codigo.value
        Estudiantes[indiceprogramas].apellidos =  nombre.value
        Estudiantes[indiceprogramas].email =  duracion.value
        Estudiantes[indiceprogramas].email =   modalidad.value

    }
}

function eliminarPeograma() {

    var programas = getJSONDeLocalStore(nombreLocalStore)

    var indiceprogramas = buscarindiceProgramas()

    if (indiceprogramas > -1) {

        alert("Programa " + programas[indiceprogramas].codigo + " eliminado")

        programas.splice(indiceprogramas, 1)

        setJSONDeLocalStore(nombreLocalStore, programas)


    }

    limpiarFormulario()


}





