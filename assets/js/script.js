var nombre = documento. getElementById("nombre");
var apellido = documento. getElementById("apellido");
var rut = documento. getElementById("rut");
var formulario = documento. getElementById("form-clientes");
var contador = 0;
var cuerpoTabla = documento. getElementById("cuerpo-tabla");
var registro = "";

formulario. addEventListener("submit", function (evento) {
  evento. preventDefault();
  Contador++;
  registro += `
            <tr>
              <th scope="row">${contador}</th>
 <td>${nombre. valor}</td>
 <td>${apellido. valor}</td>
 <td>${rut. valor}</td>
            </tr>
    `;

  cuerpoTabla. innerHTML = registro;
  formulario. restablecimiento();
});