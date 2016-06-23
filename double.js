var synaptic = require('synaptic');
var network = new synaptic.Architect.Perceptron(32, 64, 32);

function numberToArray (nMask) {
  // nMask must be between -2147483648 and 2147483647
  for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
       nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
  return sMask.split('').map(Number);
}
// console.log(numberToArray(123));

function arrayToNumber (arr) {
    var normalized = arr.map(function(b){
        if (b > 0.3){
            return 1;
        } else {
            return 0;
        }
    });
    var bin = normalized.join('');
    var num = parseInt(bin, 2);
    return num;
}
// console.log(arrayToNumber([0,0,0,0,0,0,0,1]));

var learningRate = 0.1;
for(var i = 0; i <= 10000; i++){
    var x = i % 100;
    var input = numberToArray(x);
    var output = numberToArray(x * 2);
    network.activate(input);
    network.propagate(learningRate, output);
}

console.log(arrayToNumber(network.activate(numberToArray(10))));
console.log(arrayToNumber(network.activate(numberToArray(20))));
console.log(arrayToNumber(network.activate(numberToArray(22))));

// console.log(network.standalone().toString());
