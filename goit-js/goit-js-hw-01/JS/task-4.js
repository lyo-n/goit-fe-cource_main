const credits = 23580;
const pricePerDroid = 3000;
let droid = prompt ('Введите количество дроидов');
let totalPrice = droid*pricePerDroid;
let balance = credits-totalPrice;
if ((credits - totalPrice) > 0){
    alert(`Вы купили ${droid} дроидов, на счету осталось ${balance} кредитов.`)
}
else {
    alert ('Недостаточно средств на счету!');
}