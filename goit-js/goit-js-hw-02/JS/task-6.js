let total = 0;
const numbers = [];
let input;
while ((input = prompt('Введите число!')) !== null) {
    numbers.push(Number(input));
    let number = +input; 
if ( !parseInt(input)) {
    alert ('Нужно писать число!');
}
if (!isNaN(number))
    total += number;
}
if(input === "" || input === null || !isFinite(input)){
console.log(`Общая сумма чисел равна ${total}`);
}