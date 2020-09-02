const inputHeading = document.querySelector('input');
const outputHeading = document.querySelector('#name-output');

const heading = () =>  
inputHeading.value !== null ? outputHeading.textContent = inputHeading.value : outputHeading.textContent = ' ';

inputHeading.addEventListener('input', heading);


