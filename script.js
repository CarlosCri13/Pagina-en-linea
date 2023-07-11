// Animación de desvanecimiento en el título
const title = document.querySelector('h1');
title.style.opacity = 0;

setTimeout(() => {
  title.style.transition = 'opacity 1s ease';
  title.style.opacity = 1;
}, 500);

// Animación de desplazamiento en el botón
const button = document.querySelector('.button');
button.style.transform = 'translateY(20px)';

setTimeout(() => {
  button.style.transition = 'transform 0.5s ease';
  button.style.transform = 'translateY(0)';
}, 1000);
