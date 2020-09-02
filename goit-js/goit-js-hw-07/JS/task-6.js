const inputContent = document.querySelector('#validation-input');
const validation = Number(inputContent.getAttribute('data-length'));
const elementClass = inputContent.classList;

const onColor = () => {
    inputContent.value.length === validation ? inputContent.classList.add('valid') : inputContent.classList.add('invalid');
}

const offColor = () => { 
    if ( elementClass.value !== null){
        inputContent.classList.remove(elementClass.value)
    }
}

inputContent.addEventListener('focusout', onColor);
inputContent.addEventListener('focus', offColor);

