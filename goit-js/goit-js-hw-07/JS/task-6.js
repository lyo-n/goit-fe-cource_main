const inputContent = document.querySelector('#validation-input');
const validation = Number(inputContent.getAttribute('data-length'));
const elementClass = inputContent.classList;
const onColor = () => {
    inputContent.value.length === validation ? inputContent.classList.add('valid') : inputContent.classList.add('invalid');
}
const offColor = () => { 
    if ( elementClass.value !== ''){
        inputContent.classList.remove(elementClass.value)
    }
}
inputContent.addEventListener('focusout', onColor);
inputContent.addEventListener('focus', offColor);



// const inputForm = document.querySelector('#validation-input');
// const inputLength = Number(inputForm.getAttribute('data-length'));
// const classExist = inputForm.classList;

// const changeColor = () => { inputForm.value.length >= inputLength ? inputForm.classList.add('valid') 
//     : inputForm.classList.add('invalid')
// };

// const removeColor = () => { 
//     if (classExist.value !== '')  {
//         inputForm.classList.remove(classExist.value);
//     }
// };

// inputForm.addEventListener('blur', changeColor);
// inputForm.addEventListener('focus', removeColor);