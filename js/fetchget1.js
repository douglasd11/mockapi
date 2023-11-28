// Contenido de fetchget.js
fetch("https://65590165e93ca47020a9fbec.mockapi.io/api/v1/usuarios")
    .then((response) => response.json())
    .then((response) => {
        var tableContent = "<tr><td>ID_Serial</td><td>Nombre</td><td>Categoría</td><td>Imagen</td><td>Modelo</td></tr>";

        response.forEach((user) => {
            tableContent += "<tr>" +
                "<td>" + user.id + "</td>" +
                "<td>" + user.nombre + "</td>" +
                "<td>" + user.categoria + "</td>" +
                "<td><img src='" + user.imagen + "' width='30px' height='30px'></td>" +
                "<td>" + user.modelo + "</td>" +
                "</tr>";
        });

        document.getElementById("users").innerHTML = tableContent;
    });