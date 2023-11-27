function actualizar() {
    var id = document.formulario.id.value;
    var nom = document.formulario.nombre.value;
    var ape = document.formulario.apellido.value;
    var cor = document.formulario.correo.value;
    var img = document.formulario.imagen.value;

    fetch("https://65590165e93ca47020a9fbec.mockapi.io/api/v1/usuarios/" + id, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            nombre: nom,
            apellido: ape,
            correo: cor,
            imagen: img 
        })
    })
    .then((response) => response.json())
    .then((response) => { window.location.href = "index.html" });
}