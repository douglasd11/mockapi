function ingresar() {

    console.log(document.formulario, "fetchpost")

    var id = document.formulario.id_p.value;
    var id_se = document.formulario.id_serial.value;
    var nom = document.formulario.nombre.value;
    var cat = document.formulario.categoria.value;
    var img = document.formulario.imagen.value;
    var mod = document.formulario.modelo.value;
    var ser = document.formulario.serie.value;
    var mar = document.formulario.marca.value;
    var fab = document.formulario.fabricante.value;

    fetch("https://api-gestor-empresa-1z6w.onrender.com/api/producto/agregarProducto", {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            id: id,
            idserial: id_se,
            nombre: nom,
            categoria: cat,
            imagen: img,
            modelo: mod,
            serie: ser,
            marca: mar,
            fabricante: fab
        })
    })
    // .then((response) => response.json())
    .then((response) => { window.location.href = "productos.html" });
}