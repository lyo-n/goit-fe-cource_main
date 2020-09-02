let counterValue = 0;

const iButton = document.querySelector('[data-action="increment"]');
const dButton = document.querySelector('[data-action="decrement"]');
const counter = document.getElementById('value');


const increment = () =>{
    counterValue += 1;
    return counter.textContent = counterValue;
}

const decrement = () => {
    counterValue -=1;
    return counter.textContent = counterValue;
}

iButton.addEventListener('click', increment);
dButton.addEventListener('click', decrement);




