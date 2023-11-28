function actualizar() {
    var id = document.formulario.id.value;
    var nom = document.formulario.nombre.value;
    var ape = document.formulario.apellido.value;
    var fot = document.formulario.foto.value;
    var cor = document.formulario.correo.value;
    var dir = document.formulario.direccion.value;
    var car = document.formulario.cargo.value;
    var sal = document.formulario.salario.value;

    fetch("http://localhost:3001/api/nomina/actualizarNomina", {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            id: id,
            nombre: nom,
            apellido: ape,
            foto: fot,
            correo: cor,
            direccion: dir,
            cargo: car,
            salario: sal 
        })
    })
    // .then((response) => response.json())
    .then((response) => { window.location.href = "nominas.html" });
}