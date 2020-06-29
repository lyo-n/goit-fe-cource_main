let countryDelivery = ['Китай', 'Чили', 'Австралия', 'Индия', 'Ямайка'];
let deliveriPrice = ['100', '250', '170', '80', '120'];
let country = prompt ('Веддите страну доставки!').toUpperCase();
switch (country){
case 'КИТАЙ':
    alert (`Доставка в ${countryDelivery[0]} будет стоить ${deliveriPrice[0]}`);
    break;
case 'ЧИЛИ':
    alert (`Доставка в ${countryDelivery[1]} будет стоить ${deliveriPrice[1]}`);
    break;
case 'АВСТРАЛИЯ':
    alert (`Доставка в ${countryDelivery[2]} будет стоить ${deliveriPrice[2]}`);
    break;
case 'ИНДИЯ':
    alert (`Доставка в ${countryDelivery[3]} будет стоить ${deliveriPrice[3]}`);
    break;
case 'ЯМАЙКА':
    alert (`Доставка в ${countryDelivery[4]} будет стоить ${deliveriPrice[4]}`);
    break;
default:
    alert('В вашей стране доставка не доступна');
}

