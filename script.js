function saludo() {
  alert("Hola Mundo");
  var nombre = prompt("Ingrese su nombre: ");
  alert("Hola " + nombre);
}

var inicio = document.getElementsByClassName("link")[0];

inicio.addEventListener("click", function() {
  saludo();  
});

