const boton = document.getElementById('mostrarDato');
const resultado = document.getElementById('resultado');

const datos = [
  'La primera computadora electrónica moderna, ENIAC, se construyó entre 1943 y 1945.',
  'Ada Lovelace escribió el primer algoritmo para una máquina en 1843.',
  'El desarrollo de las computadoras exigió colaboración entre matemáticos, ingenieros y científicos.'
];

boton.addEventListener('click', () => {
  const indice = Math.floor(Math.random() * datos.length);
  resultado.textContent = datos[indice];
});
