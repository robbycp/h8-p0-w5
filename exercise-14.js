function changeVocals (str) {
  //code di sini
  var newStr = ''
  for (var x = 0; x < str.length; x++) {
    if (str[x] == 'a' || str[x] == 'i' || str[x] == 'u' || str[x] == 'e' || str[x] == 'o'
    || str[x] == 'A' ||str[x] == 'I' ||str[x] == 'U' ||str[x] == 'E' ||str[x] == 'O') {
      var newChar = String.fromCharCode(str[x].charCodeAt(0) + 1);
      newStr += newChar;
    } else {
      newStr += str[x]
    }
  }
  return newStr
}

function reverseWord (str) {
  //code di sini
  var newStr = ''
  for (var x = str.length - 1; x >= 0; x--) {
    newStr += str[x]
  }
  return newStr
}

function setLowerUpperCase (str) {
  //code di sini
  var newStr = ''
  for (var x = 0; x < str.length; x++) {
    if (str[x].toUpperCase() == str[x]) {
      newStr += str[x].toLowerCase();
    } else {
      newStr += str[x].toUpperCase();
    }
  }
  return newStr
}

function removeSpaces (str) {
  //code di sini
  var newStr = ''
  for (var x = 0; x < str.length; x++) {
    if (str[x] == " ") {
      continue;
    } else {
      newStr += str[x]
    }
  }
  return newStr
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter"
  }
  return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'