//Задание 6.1
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'd', null, 'e'];

function revealEvenOdd (arr) {
    let countEven = 0;
    let countOdd = 0;
    let countOther = 0;

    for (let i = 0; i < arr.length; i++){
        if ((arr[i] === 0) || (typeof(arr[i]) !== 'number')) {
            countOther++;
        } else {
            if (arr[i] % 2 === 0) {
                countEven++;
            } else {
                countOdd++;
            }
        }
    }
    return [countEven, countOdd, countOther];
}

let rez = revealEvenOdd(array)

console.log("Четных " + rez[0]);
console.log("Нечетных " + rez[1]);
console.log("Другого " + rez[2]);