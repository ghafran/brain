var synaptic = require('synaptic');
var network = new synaptic.Architect.Perceptron(32, 16, 8, 4, 1);

// function normalizeMinMax(val, min, max){
//     return (val - min) / (max - min);
// }
// console.log(normalizeMinMax(50, 0, 100));

function numberToArray (nMask) {
  // nMask must be between -2147483648 and 2147483647
  for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
       nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
  return sMask.split('').map(Number);
}
// console.log(numberToArray(123));

var learningRate = 0.3;
for(var i = 0; i <= 100000; i++){
    var x = i % 100;
    var input = numberToArray(x);
    var output = x < 50 === 0 ? 1: 0;
    // var output = x % 2 === 0 ? 1: 0;
    network.activate(input);
    network.propagate(learningRate, [output]);
}

console.log(network.activate(numberToArray(1))[0]);
console.log(network.activate(numberToArray(2))[0]);
console.log(network.activate(numberToArray(50))[0]);
console.log(network.activate(numberToArray(51))[0]);
console.log(network.activate(numberToArray(70))[0]);
console.log(network.activate(numberToArray(71))[0]);
