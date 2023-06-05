//ID de peliculas
var movieList = document.getElementById('movieList');


movieList.addEventListener('click', function (event) {
	// boton de compra
	if (event.target.classList.contains('buyButton')) {
		var clickedMovie = event.target.parentNode;

		// personalizacion de peliculas
		var genre = clickedMovie.dataset.genre;
		var duration = clickedMovie.dataset.duration;
		var price = parseFloat(clickedMovie.dataset.price);


		// Mostrar el alert con el detalle de la película y el botón de compra
		var alertMessage = 'Has seleccionado la película: ' + clickedMovie.textContent + '\n' +
			'Género: ' + genre + '\n' +
			'Duración: ' + duration + ' minutos' + '\n' +
			'Precio: $' + price + '\n\n' +
			'¡Haz clic en el botón "Comprar" para realizar la compra!';
		var confirmBuy = confirm(alertMessage);

		// confirmacion de boton de compra
		if (confirmBuy) {
		}
	}
});



function verificarEdad() {
	// Obtener el valor ingresado en el input
	var inputEdad = document.getElementById("input-edad").value;



	if (inputEdad === "" || inputEdad > 130 || isNaN(inputEdad) || inputEdad < 1) {
		document.getElementById("mensaje-edad").textContent = "Vuelve a intentarlo";
		return;
	}

	if (inputEdad === "" || inputEdad > 130) {
		document.getElementById("mensaje-edad").textContent = "Vuelve a intentarlo";
		return;
	}

	//  alert
	var mensaje = inputEdad >= 18 && inputEdad <= 65
		? "Eres un adulto"
		: inputEdad < 18
			? "Eres menor de edad"
			: "Eres mayor de edad";

	document.getElementById("mensaje-edad").textContent = mensaje;
}
