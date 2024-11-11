document.addEventListener('DOMContentLoaded', () => {

  
    const estudiantes = JSON.parse(localStorage.getItem('Estudiantes')) || [];
    const programas = JSON.parse(localStorage.getItem('Programas')) || [];

  
    function llenarSelect() {
        const estudianteSelect = document.getElementById('estudiante-id');
        const programaSelect = document.getElementById('programa-id');

        
        if (estudiantes.length === 0) {
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'No hay estudiantes registrados';
            estudianteSelect.appendChild(option);
        } else {
            estudiantes.forEach(estudiante => {
                const option = document.createElement('option');
                // Usar las propiedades correctas de la clase Estudiante
                option.value = estudiante.Identificacion;
                option.textContent = `${estudiante.Nombres} ${estudiante.Apellidos} (${estudiante.Identificacion})`;
                estudianteSelect.appendChild(option);
            });
        }

        
        if (programas.length === 0) {
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'No hay programas registrados';
            programaSelect.appendChild(option);
        } else {
            programas.forEach(programa => {
                const option = document.createElement('option');
                option.value = programa.CodigoPrograma;
                option.textContent = `${programa.NombrePrograma} (${programa.CodigoPrograma})`;
                programaSelect.appendChild(option);
            });
        }
    }

    
    llenarSelect();

   
    document.getElementById('matricula-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const matriculaId = document.getElementById('matricula-id').value;
        const estudianteId = document.getElementById('estudiante-id').value;
        const programaId = document.getElementById('programa-id').value;
        const fechaMatricula = document.getElementById('fecha-matricula').value;
        const estado = document.getElementById('estado').value;

       
        if (!matriculaId || !estudianteId || !programaId || !fechaMatricula || !estado) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        
        const matricula = {
            matriculaId,
            estudianteId,
            programaId,
            fechaMatricula,
            estado
        };

        console.log('Matrícula registrada:', matricula);
        alert('Matrícula registrada exitosamente.');
    });
});
