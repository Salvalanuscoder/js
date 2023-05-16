
let temas = ["drama", "accion", "terror", "comedia"];
let genero = prompt("que genero de pelicula deseas ver");

//Metodo de busqueda con IndexOf
while (temas.indexOf(genero) === -1) {
	alert("Vuelva a intentarlo");
	genero = prompt("que genero de pelicula deseas ver");
}
//Comprobar el género de la película y mostrar un mensaje apropiado

const GeneroEncontrado = temas.filter(temas => temas === genero);

if (GeneroEncontrado.length > 0) {
	if (genero === "accion") {
		alert("esta es una pelicula de accion");
		console.log("Esta es una película de acción.");
	} else if (genero === "comedia") {
		alert("esta es una pelicula de comedia");
		console.log("Esta es una película de comedia.");
	} else if (genero === "drama") {
		alert("esta es una pelicula de drama");
		console.log("Esta es una película dramática.");
	} else if (genero === "terror") {
		alert("esta es una pelicula de terror");
		console.log("Esta es una película de terror.");
	} else {
		console.log("No se reconoce este género de película.");
	}
}

//method find

const peliculas = [
	{ nombre: "john wick", genero: "accion", año: "2014" },
	{ nombre: "it", genero: "terror", año: "2017" },
	{ nombre: "grown ups", genero: "comedia", año: "2010" },
	{ nombre: "el padrino", genero: "drama", año: "1942" },
  ];
  
  let encontrada = false; // Variable para controlar si se encontró la película
  let continuar = true;
  
  while (continuar) {
	const nombrePelicula = prompt("Ingrese el nombre de una pelicula");
	if (nombrePelicula === null) {
	  // Si el usuario cancela el ingreso, se sale del ciclo
	  break;
	}
	
	const peliculaBuscada = peliculas.find(
	  (pelicula) =>
		pelicula.nombre.toLocaleLowerCase() === nombrePelicula.toLocaleLowerCase()
	);
  
	if (peliculaBuscada) {
	  const { nombre, genero, año } = peliculaBuscada;
	  console.log("nombre: " + nombre);
	  console.log("genero: " + genero);
	  console.log("año de estreno: " + año);
	  alert("nombre: " + nombre);
	  alert("genero: " + genero);
	  alert("año de estreno: " + año);
	  encontrada = true; // Se encontró la película
	} else {
	  alert("No se encontro la pelicula. Vuelve a intentarlo");
	  console.log("No se encontro la pelicula");
	}
  
	if (encontrada) {
	  // Si se encontró la película, se sale del ciclo
	  break;
	}
  }
  

// Array de películas
let pelicula = [
    { titulo: "John Wick", genero: "Acción", duracion: 120, precio: 90 },
    { titulo: "El Padrino", genero: "Drama", duracion: 180, precio: 8 },
    { titulo: "IT", genero: "Terror", duracion: 150, precio: 70 },
	{ titulo: "grown ups", genero: "comedia", duracion: 110, precio: 65 },
  ];
  
  // mostrar las películas en pantalla y permitir la selección del usuario
  function seleccionarPelicula(pelicula) {
    let opciones = "";
    for (let i = 0; i < pelicula.length; i++) {
      opciones += `${i + 1}. ${pelicula[i].titulo}\n`;
    }
  
    let seleccion = parseInt(prompt(`Elige una película:\n${opciones}`));
  
    if (seleccion >= 1 && seleccion <= pelicula.length) {
      let peliculaSeleccionada = pelicula[seleccion - 1];
      let mensaje = `Has seleccionado:\nTítulo: ${peliculaSeleccionada.titulo}\nGénero: ${peliculaSeleccionada.genero}\nDuración: ${peliculaSeleccionada.duracion} minutos\nPrecio: $${peliculaSeleccionada.precio}`;
      alert(mensaje);
      console.log(mensaje);
  
      //operaciones matemáticas
      let precio = peliculaSeleccionada.precio;
      let cantidad = parseInt(prompt("Ingrese la cantidad de películas que desea comprar:"));
  
      let subtotal = calcularSubtotal(precio, cantidad);
      let descuento = 0;
      if (cantidad >= 2) {
        descuento = aplicarDescuento(subtotal, 10);
        alert("¡Descuento del 10% aplicado!");
      }
      let total = calcularTotal(subtotal, descuento);
  
      alert(`Subtotal: $${subtotal}\nDescuento: $${descuento}\nTotal: $${total}`);
      console.log("Subtotal:", subtotal);
      console.log("Descuento:", descuento);
      console.log("Total:", total);
    } else {
      alert("Selección inválida. Por favor, intenta nuevamente.");
    }
  }
  
  // Función para calcular el subtotal
  function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
  }
  
  // Función para aplicar un descuento en un valor
  function aplicarDescuento(valor, porcentajeDescuento) {
    return valor * (porcentajeDescuento / 100);
  }
  
  // Función para calcular el total después de aplicar un descuento
  function calcularTotal(subtotal, descuento) {
    return subtotal - descuento;
  }
  
  seleccionarPelicula(pelicula);


//CICLO

let edad = parseInt(prompt("Ingrese su edad"));
console.log(edad);
while (!edad || edad < 0 || edad > 130) {
	alert("Vuelva a intentarlo");
	edad = parseInt(prompt("Ingrese su edad"));
}

//SWITCH
function checkAge(Edad) {
	switch (true) {
		case edad < 0:
			alert("Error: La edad no puede ser negativa.");
			console.log("La edad no puede ser negativa");
			break;
		case edad < 12:
			alert("Lo siento, usted no es lo suficientemente mayor para ver esta pelicula.");
			console.log("Lo siento, usted no es lo suficientemente mayor para ver esta pelicula.");
			break;
		case edad < 18:
			alert("Puede ver esta pelicula, pero necesita un acompañante.");
			console.log("Puede ver esta pelicula, pero necesita un acompañante.");
			break;
		default:
			alert("Eres mayor de edad, puedes ver la pelicula.");
			console.log("Eres mayor de edad, puedes ver la pelicula.");
			break;
	}
}

//CheckAge
checkAge(edad);
if (true === "edad < 12") {
	respuesta = "Lo siento, usted no es lo suficientemente mayor para ver esta pelicula.";
} else if (true === "edad < 18") {
	respuesta = "Puede ver esta pelicula, pero necesita un acompañante.";
} else if (true === "edad > 18") {
	respuesta = "Eres mayor de edad, puedes ver la pelicula.";
} else {
	respuesta = "Ingrese su edad";
}
