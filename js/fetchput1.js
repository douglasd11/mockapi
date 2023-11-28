function actualizar() {
    var id = document.formulario.id.value;
    var id_se = document.formulario.id_se.value;
    var nom = document.formulario.nombre.value;
    var cat = document.formulario.categoria.value;
    var img = document.formulario.imagen.value;
    var mod = document.formulario.modelo.value;

    fetch("https://65590165e93ca47020a9fbec.mockapi.io/api/v1/usuarios/" + id, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            id_serial: id_se,
            nombre: nom,
            categoria: cat,
            imagen: img,
            modelo: mod,
        
        })
    })
    .then((response) => response.json())
    .then((response) => { window.location.href = "index.html" });
}