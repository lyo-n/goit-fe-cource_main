const slider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
const changeSpan = () => text.style.fontSize = event.currentTarget.value + `px`;
slider.addEventListener('input', changeSpan);












