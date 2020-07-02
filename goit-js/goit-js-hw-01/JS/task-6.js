let total = 0;
let input;
while ((input = prompt('Введите число!')) !== null) {
let number = +input; 
if (!isNaN(number))
total += number;
}
if(input === "" || input === null || !isFinite(input)){
alert(`Общая сумма чисел равна ${total}`);
}
