let temas = ["drama", "accion", "terror", "comedia"];
let genero = prompt("que genero de pelicula deseas ver");
while (!temas.includes(genero)) {
	alert("Vuelva a intentarlo");
	genero = prompt("que genero de pelicula deseas ver");
}
// Comprobar el género de la película y mostrar un mensaje apropiado
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