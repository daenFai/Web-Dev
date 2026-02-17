alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // 2
alert( 1 && null && 2 ); //null
alert( alert(1) && alert(2) ); //undefined (but first will be 1)
alert( null || 2 && 3 || 4 ); // 3

let value = NaN;
value &&= 10; //NaN
value ||= 20; // 20
value &&= 30; // 30
value ||= 40; // 30 (value истинно, поэтому присваивание не срабатывает)
alert(value); // 30

if (age >= 14 && age <= 90);

if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

if (-1 || 0) alert( 'first' ); //Выполнится, Результат -1 || 0 = -1, в логическом контексте true
if (-1 && 0) alert( 'second' ); //Не выполнится, -1 && 0 = 0,  в логическом контексте false
if (null || -1 && 1) alert( 'third' ); //Выполнится, оператор && имеет больший приоритет, чем || так что -1 && 1 выполнится раньше
                                       //вычисления: null || -1 && 1  ->  null || 1  ->  1


let userName = prompt("Кто там?", '');
if (userName === 'Админ') {
    let pass = prompt('Пароль?', '');

    if (pass === 'Я главный') {
        alert( 'Здравствуйте!' );
    }
    else if (pass === '' || pass === null) {
        alert( 'Отменено' );
    }
    else {
        alert( 'Неверный пароль' );
    }
}
else if (userName === '' || userName === null) {
    alert( 'Отменено' );
}
else {
    alert( "Я вас не знаю" );
}

