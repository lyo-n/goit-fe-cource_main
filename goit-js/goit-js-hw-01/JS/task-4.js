const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let balance;
let conclusion;
const droid = prompt('Введите количество дроидов');
if (droid === null || droid<=0){
    conclusion = 'Отменено пользователем!';
}else if (isNaN(droid[0]) || isNaN(droid)) { 
    console.log('Введите число!');
}else{
    totalPrice = droid*pricePerDroid;
}
if(!conclusion){
if ((credits - totalPrice) <= 0) {
    console.log(`Недостаточно средств на счету!`);
}else {
    balance = credits - totalPrice;
    console.log(`Вы купили ${droid} дроидов, на счету осталось ${balance} кредитов.`);
}}
else{
    console.log(conclusion);
}