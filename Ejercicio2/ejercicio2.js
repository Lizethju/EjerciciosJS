
const elementoContenedor = [
  { cedula: 1011, nombre: "Lizeth", telefono: "310451", edad: 28 },
  { dedula: 1031, nombre: "Esteban", telefono: "315236", edad: 32 },
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
  }


if(validarSiUsuarioExiste(cedula)){
  alert ("Usuario ya existe")
}else{
  alert("Usuario nuevo")
}

  let ingresoUser = JSON.parse(localStorage.getItem("ingresoUser")) || [];
  ingresoUser.push(elementoUser);
/* Siempre si quiero que los valores queden en  localStorage, tengo que setearlos con setItem, lo parceo con JSon y lo convierto en  un objeto o valor de JavaScript en una cadena de texto JSON*/
  localStorage.setItem("ingresoUser", JSON.stringify(ingresoUser));

  /*alert("Guardado correctamente");*/

}

function validarSiUsuarioExiste(cedulaNueva){

  console.log(`cedula ${cedulaNueva}`);
  let ingresoUser = JSON.parse(localStorage.getItem("ingresoUser") || "[]");

if (ingresoUser.find(usuario => usuario.cedula == cedulaNueva)){
  return true;
}else{
  return false;
}

}


function validarEdad (edad){


  if(edad >= 18){
    alert('Eres mayor de edad');
  }else{
    alert('Eres menor de edad');
  }
  
  let ingresoUser = JSON.parse(localStorage.getItem("ingresoUser")) || [];

  ingresoUser.push({
    edad: edad,
    resultado: edad >= 18 ? 'Mayor de edad' : 'Menor de edad'
  });
  
  localStorage.setItem("ingresoUser", JSON.stringify(ingresoUser));

}











/*

let usuario = elementoContenedor.find((u) => u.cedula === cedula);

if (!usuario) {
  usuario = { cedula, nombre, telefono, edad };
  elementoContenedor.push(usuario);
} else if (registrar == elementoContenedor) {
  alert("documento correcto");
} else registrar != elementoContenedor;
{
  alert("Requiere de registro");
}

let documentos = (1031154, 1031155);

*/

/* Se declara una variable.*/

/*let usuarioSelecionado = "";

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

*/




