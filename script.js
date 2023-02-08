const Seasons = (numMonth) => {
    numMonth = prompt('Введите номер месяца') 
    if (numMonth === 12 || (numMonth >=1 && numMonth <=2)) {
        alert('Зима')
    } else if (numMonth >= 3 && numMonth <= 5) {
        alert('Весна')
    } else if (numMonth >= 6 && numMonth <= 8) {
        alert('Лето')
    } else if (numMonth >= 9 && numMonth <= 11) {
        alert('Осень')
    } else {
        alert('Указанное значение не является номером месяца!');
    } 
    
}

console.log(numMonth);