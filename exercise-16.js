function totalDigitRekursif(angka) {
    // you can only write your code here!
    var stringifyNum = String(angka);
    if (stringifyNum.length == 1) {
        return Number(stringifyNum[0]);
    } else {
        var firstNumber = Number(stringifyNum[0]);
        var nextNumber = Number(stringifyNum.substring(1,stringifyNum.length));
        return firstNumber + totalDigitRekursif(nextNumber);
    }
}

//TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5