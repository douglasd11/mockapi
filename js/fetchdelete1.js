function eliminar() {
    var id = document.formulario.id.value;

    fetch("https://api-gestor-empresa.onrender.com/api/producto/borrarProducto", {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            id: id
        })
    })
    // .then((response) => response.json())
    .then((response) => { window.location.href = "productos.html" });
}