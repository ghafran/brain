var ABC = {
  toAscii: function(bin) {
    return bin.replace(/\s*[01]{8}\s*/g, function(bin) {
      return String.fromCharCode(parseInt(bin, 2));
  });
  },
  toBinary: function(str, spaceSeparatedOctets) {
    return str.replace(/[\s\S]/g, function(str) {
      str = ABC.zeroPad(str.charCodeAt().toString(2));
      return !(1 == spaceSeparatedOctets ? str : str + ' ');
  });
  },
  zeroPad: function(num) {
    return '00000000'.slice(String(num).length) + num;
  }
};

var synaptic = require('synaptic');

var input = 8;
var pool = 30;
var output = 1;
var connections = 30;
var gates = 10;

//Create LSTM
console.log("Initializing LSTM...");
var network = new synaptic.Architect.Liquid(input, pool, output, connections, gates);

console.log("Optimizing LSTM...");
LSTM.optimize();

console.log("Starting training...");
var learningRate = 0.1;
network.activate([0,1,1,0,1,0,0,0]);
network.activate([0,1,1,0,0,1,0,1]);
network.activate([0,1,1,0,1,1,0,0]);
network.activate([0,1,1,0,1,1,0,0]);
network.activate([0,1,1,0,1,1,1,1]);
network.propagate(learningRate, [1]);

network.activate([0,1,1,0,1,0,0,0]);
network.activate([0,1,1,0,0,1,0,1]);
network.activate([0,1,1,0,1,1,0,0]);
network.activate([0,1,1,0,1,1,0,0]);
console.log(network.activate([0,1,1,0,1,1,1,1]));
