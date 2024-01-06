//Задание 6.2
function isPrimeNumber(num){
    if (num > 1000) return "Данные неверны.";
    if (num === 0) return  "Ноль - число ненатуральное.";
    if (num === 1) return "Один - Не простой и не составной.";
    let divisionsCount = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) divisionsCount++;
    }

    if (divisionsCount === 2)
        return "Число простое.";
    else
        return "Число составное.";
}


console.log(isPrimeNumber(10));