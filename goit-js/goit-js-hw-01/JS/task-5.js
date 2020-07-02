const china = '100';
const chili = '250';
const australia = '170';
const india = '80';
const jamaica = '120'; 
const country = prompt ('Веддите страну доставки!').toLowerCase();
switch (country){
case 'китай':
    alert (`Доставка в Китай будет стоить ${china}`);
    break;
case 'чили':
    alert (`Доставка в Чили будет стоить ${chili}`);
    break;
case 'австралия':
    alert (`Доставка в Австралию будет стоить ${australia}`);
    break;
case 'индия':
    alert (`Доставка в Индию будет стоить ${india}`);
    break;
case 'ямайка':
    alert (`Доставка в Ямайку будет стоить ${jamaica}`);
    break;
default:
    alert('В вашей стране доставка не доступна');
}

