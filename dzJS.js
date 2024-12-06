let name = prompt("Введіть своє ім'я:");
alert(`Привіт, ${name}!`);


const currentYear = 2024; 
let birthYear = prompt("Введіть свій рік народження:");
let age = currentYear - birthYear;
alert(`Вам ${age} років.`);

let sideLength = prompt("Введіть довжину сторони квадрата:");
let perimeter = sideLength * 4;
alert(`Периметр квадрата: ${perimeter}`);



let radius = prompt("Введіть радіус кола:");
let area = Math.PI * Math.pow(radius, 2);
alert(`Площа кола: ${area.toFixed(2)}`);


let distance = prompt("Введіть відстань між містами (в км):");
let time = prompt("За скільки годин хочете дістатися?");
let speed = distance / time;
alert(`Вам потрібно рухатись зі швидкістю ${speed} км/год.`);


const exchangeRate = 0.93;
let dollars = prompt("Введіть суму в доларах:");
let euros = dollars * exchangeRate;
alert(`Сума у євро: ${euros.toFixed(2)}`);


let flashDriveSizeGB = prompt("Введіть обсяг флешки (в ГБ):");
let fileSizeMB = 820;
let filesFit = Math.floor((flashDriveSizeGB * 1024) / fileSizeMB);
alert(`На флешку поміститься ${filesFit} файлів розміром 820 МБ.`);

let money = prompt("Введіть суму грошей у гаманці:");
let chocolatePrice = prompt("Введіть вартість однієї шоколадки:");
let chocolates = Math.floor(money / chocolatePrice);
let change = money % chocolatePrice;
alert(`Ви можете купити ${chocolates} шоколадок. Здача: ${change}`);



let number = prompt("Введіть тризначне число:");
let reversedNumber = number.split('').reverse().join('');
alert(`Число-паліндром: ${reversedNumber}`);


let num = prompt("Введіть ціле число:");
alert(num % 2 === 0 && "Парне" || "Непарне");
