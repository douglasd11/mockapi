// Contenido de fetchget.js
fetch("https://api-gestor-empresa-1z6w.onrender.com/api/nomina/obtenerNominas")
    .then((response) => response.json())
    .then((response) => {
        var tableContent = "<tr><td>ID</td><td>Nombre</td><td>Apellido</td><td>Foto</td><td>Correo</td><td>Direccion</td><td>Cargo</td><td>Salario</td></tr>";

        response.forEach((nomina) => {
            tableContent += "<tr>" +
                "<td>" + nomina.id + "</td>" +
                "<td>" + nomina.nombre + "</td>" +
                "<td>" + nomina.apellido + "</td>" +
                "<td>" + nomina.foto + "</td>" +
                "<td>" + nomina.correo + "</td>" +
                "<td>" + nomina.direccion + "</td>" +
                "<td>" + nomina.cargo + "</td>" +
                "<td>" + nomina.salario + "</td>" +
            "</tr>";
        });

        document.getElementById("nominas").innerHTML = tableContent;
    });




