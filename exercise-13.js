// Using merge sort
function sorting(arrNumber) {
  if (arrNumber.length == 0) {
    return [];
  }
  // code di sini
  if (arrNumber.length < 2) {
    return arrNumber;
  }

  var middle = Math.floor(arrNumber.length / 2)
  var leftArr = arrNumber.slice(0, middle)
  var rightArr = arrNumber.slice(middle)

  return merge(
    sorting(leftArr),
    sorting(rightArr)
  )
}

// compare the arrays item by item and return the concatenated result
function merge(leftArr, rightArr) {
  var result = []
  var indexLeft = 0
  var indexRight = 0
  while (indexLeft < leftArr.length && indexRight < rightArr.length) {   
    if (leftArr[indexLeft] < rightArr[indexRight]) {
      result.push(leftArr[indexLeft])
      indexLeft++
    } else {
      result.push(rightArr[indexRight])
      indexRight++
    }
  }
  return result.concat(leftArr.slice(indexLeft)).concat(rightArr.slice(indexRight))
}

function getTotal(arrNumber) {
  if (arrNumber.length == 0) {
    return ''
  }
  // code di sini
  var counter = 0;
  for (var x = arrNumber.length - 1; x >= 0; x--) {
    if (arrNumber[x] != arrNumber[x - 1]) {
      counter++
      break;
    } else {
      counter++
    }
  }
  return 'angka paling besar adalah ' + arrNumber[arrNumber.length - 1] + ' dan jumlah kemunculan sebanyak ' + counter + ' kali'
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

// console.log(mostFrequentLargestNumbers([]));
