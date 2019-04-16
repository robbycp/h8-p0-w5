function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var stringifyNum = String(angka);
    if (stringifyNum.length == 1) {
        return angka;
    } else {
        var totalTimes = 1;
        for (var x = 0; x < stringifyNum.length; x++) {
            totalTimes *= stringifyNum[x];
        }
        return kaliTerusRekursif(totalTimes);
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6