
const elementoInformacion = [
    { cedula: 1031154, nombre: "Lizeth", telefono: "310451", edad: 28 },
    { dedula: 1031155, nombre: "Esteban", telefono: "315236", edad: 32 },
  ];


  let ingresoConcedido = JSON.parse(localStorage.getItem("ingresoConcedido")) || [];
  ingresoConcedido.push(elementoUser);