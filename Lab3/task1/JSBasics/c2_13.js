let i = 3;

while (i) {
    alert( i-- );
} // 1

for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i ); // 0 --> 4


for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert( i );
    }
}


let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}


let num;

do {
    num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);



let n = 10;
nextPrime:
    for (let i = 2; i <= n; i++) { // Для всех i...

        for (let j = 2; j < i; j++) { // проверить, делится ли число..
            if (i % j == 0) continue nextPrime; // не подходит, берём следующее
        }
        alert( i ); // простое число
    }