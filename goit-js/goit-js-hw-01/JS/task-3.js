const ADMIN_PASSWORD = `jqueryismyjam`;
let message;
message = 'Добро пожаловать!';
const inputPassword = prompt('Введите пароль!');
if (inputPassword === ADMIN_PASSWORD){
    alert (message)
}
else if ( inputPassword !== ADMIN_PASSWORD  != '' && inputPassword != null) {
    message='Доступ запрещен, неверный пароль!';
    alert(message);
}
else {
message='Отменено пользователем!'; 
    alert(message);
}





