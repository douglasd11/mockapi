// Contenido de fetchget.js
fetch("https://65590165e93ca47020a9fbec.mockapi.io/api/v1/usuarios")
    .then((response) => response.json())
    .then((response) => {
        var tableContent = "<tr><td>ID</td><td>Nombre</td><td>Apellido</td><td>Correo</td><td>Imagen</td></tr>";

        response.forEach((user) => {
            tableContent += "<tr>" +
                "<td>" + user.id + "</td>" +
                "<td>" + user.nombre + "</td>" +
                "<td>" + user.apellido + "</td>" +
                "<td>" + user.correo + "</td>" +
                "<td><img src='" + user.imagen + "' width='30px' height='30px'></td>" +
                "</tr>";
        });

        document.getElementById("users").innerHTML = tableContent;
    });




