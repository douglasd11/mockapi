// Contenido de fetchget.js
fetch("https://api-gestor-empresa.onrender.com/api/producto/obtenerProductos")
    .then((response) => response.json())
    .then((response) => {
        var tableContent = "<tr><td>ID_Serial</td><td>Nombre</td><td>Categoría</td><td>Imagen</td><td>Modelo</td><td>Marca</td><td>Fabricante</td></tr>";

        response.forEach((producto) => {
            console.log(producto)
            tableContent += "<tr>" +
                "<td>" + producto.idserial + "</td>" +
                "<td>" + producto.nombre + "</td>" +
                "<td>" + producto.categoria + "</td>" +
                "<td><img src='" + producto.imagen + "' width='30px' height='30px'></td>" +
                "<td>" + producto.modelo + "</td>" +
                "<td>" + producto.marca + "</td>" +
                "<td>" + producto.fabricante + "</td>" +
                "</tr>";
        });

        document.getElementById("productos").innerHTML = tableContent;
    });