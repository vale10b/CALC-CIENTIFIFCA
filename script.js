const pantalla = document.getElementById('pantalla');

function insertar(valor) {
  pantalla.value += valor;
}

function borrar() {
  pantalla.value = '';
}

function borrarUno() {
  pantalla.value = pantalla.value.slice(0, -1);
}

function calcular() {
  try {
    pantalla.value = eval(pantalla.value);
  } catch {
    pantalla.value = 'Error';
  }
}

function funcion(tipo) {
  try {
    const valor = parseFloat(pantalla.value);
    let resultado;
    switch (tipo) {
      case 'sin':
        resultado = Math.sin(toRadianes(valor)); break;
      case 'cos':
        resultado = Math.cos(toRadianes(valor)); break;
      case 'tan':
        resultado = Math.tan(toRadianes(valor)); break;
      case 'log':
        resultado = Math.log10(valor); break;
      case 'ln':
        resultado = Math.log(valor); break;
      case 'sqrt':
        resultado = Math.sqrt(valor); break;
      case 'exp':
        resultado = Math.exp(valor); break;
      case 'fact':
        resultado = factorial(valor); break;
    }
    pantalla.value = resultado;
  } catch {
    pantalla.value = 'Error';
  }
}

function toRadianes(grados) {
  return grados * Math.PI / 180;
}

function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) return 'Error';
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  return f;
}
