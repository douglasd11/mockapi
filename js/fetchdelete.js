function eliminar() {
    var id = document.formulario.id.value;

    fetch("https://65590165e93ca47020a9fbec.mockapi.io/api/v1/usuarios/" + id, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' }
    })
    .then((response) => response.json())
    .then((response) => { window.location.href = "index.html" });
}
