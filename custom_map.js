
function map(array, callback) {
  var letterCount = [];
  for(var item of array) {
    letterCount.push(callback(item));
  };
  return letterCount;
}

function countElement(element) {
  return element.length;
}


console.log(map(["ground", "control", "to", "major", "tom"], countElement));
