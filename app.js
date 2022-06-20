let nombre = prompt("Ingrese una pelicula")
let padre = document.getElementById("peliculas");
let peliculas = ["el padrino", "Jurasic park", "terminator"];
peliculas.push(nombre)
for(const pelicula of peliculas){
  let li = document.createElement("li");
  li.innerHTML = pelicula;
  padre.append(li);}