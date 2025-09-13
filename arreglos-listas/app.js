const resultado = document.getElementById("txtresultado");
function mensaje(texto) {
  console.log(texto);
alert(texto);
const resultado = document.getElementById("txtresultado");
resultado.innerHTML = texto;
resultado.textContent = texto;
};
function agregar(palabra) {
  resultado.textContent = palabra;
};
function eliminar(palabra) { 
};
function mostrar(palabra) {
};
function modificar(palabra) {
};
const btnagregar = document.getElementById("btnagregar");
const btneliminar = document.getElementById("btneliminar");
const btnmostrar = document.getElementById("btnmostrar");
const btnmodificar = document.getElementById("btnmodificar");
btnagregar.addEventListener("click", agregar("klk"));
btneliminar.addEventListener("click", eliminar("klk"));
btnmostrar.addEventListener("click", mostrar("klk"));
btnmodificar.addEventListener("click", modificar("klk"));