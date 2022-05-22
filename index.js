const displayValorAnterior = document.getElementById('valorAnterior');
const displayValorActual = document.getElementById('valorActual');
const buttonNumeros = document.querySelectorAll('.numero');
const buttonOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual)

buttonNumeros.forEach(boton => {
    boton.addEventListener('click', () =>
        display.agregarNumero(boton.innerHTML))
});

buttonOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
})

