let total = 0;
let input = +prompt('Введите число');
if ( !parseInt(input)) {
    alert ('Нужно писать число');
}
while(input){
    total += input;
    input = +prompt();
}
alert(`Общая сумма чисел равна ${total}`);