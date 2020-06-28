let ADMIN_PASSWORD = prompt('Введите пароль!')
if (ADMIN_PASSWORD == 'jqueryismyjam'){
    alert ('Добро пожаловать!')
}
else if ( ADMIN_PASSWORD !== 'jqueryismyjam' && ADMIN_PASSWORD != '' && ADMIN_PASSWORD != null) {
    alert ('Доступ запрещен, неверный пароль!');
}
else{
    alert('Отменено пользователем!');
}
