const elementoContenedor = [
  { documento: 1031154, nombre: "Lizeth", telefono: "310451", edad: 28 },
  { documento: 1031155, nombre: "Esteban", telefono: "315236", edad: 32 },
];



function registrar() {
  const cedula = document.getElementById("cedula").value;
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const edad = document.getElementById("edad").value;

  const elementoUser = {
    cedula: cedula,
    nombre: nombre,
    telefono: telefono,
    edad: edad,
  };

  let ingresoUser = JSON.parse(localStorage.getItem("ingresoUser")) || [];
  ingresoUser.push(elementoUser);

  /* Siempre si quiero que los valores queden en el storas, tengo que setearlo con setItem, lo parceo con JSon y lo convierto en convierte un objeto o valor de JavaScript en una cadena de texto JSON*/
  localStorage.setItem("ingresoUser", JSON.stringify(ingresoUser));

  alert("Guardado correctamente");


}

let usuario = elementoContenedo.find(u => u.cedula === cedula);

if (!usuario) {
    usuario = { cedula, nombre, telefono, edad };
    elementoContenedo.push(usuario);
}

/* Se declara una variable.*/

let usuarioSelecionado = "";

function selecionDocumento(usuario) {
  selecionDocumento = usuario.options[usuario.selectedIndex];
}

function agregarNuevaColumna(valor, fila) {
  let nuevaf = document.createElement("td");
  nuevaf.textContent = valor;
  fila.appendChild(nuevaf);
}

function guardarUsuarios() {
  if (registrar === "elementoContenedor") {
    alert("Registro exitoso");
    return;
  } else {
    elementoContenedor!= "registrar";
    alert("No se encuentra registrado");
  }
}

