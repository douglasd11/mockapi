function eliminar() {
    var id = document.formulario.id.value;

    fetch("http://localhost:3001/api/nomina/borrarNomina", {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            id: id
        })
    })
    // .then((response) => response.json())
    .then((response) => { window.location.href = "nominas.html" });
}
