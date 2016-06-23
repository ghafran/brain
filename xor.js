var synaptic = require('synaptic');
var network = new synaptic.Architect.Perceptron(2, 4, 1);

var learningRate = 0.3;
for(var i = 0; i <= 20000; i++){
    network.activate([0, 0]);
    network.propagate(learningRate, [0]);
    network.activate([0, 1]);
    network.propagate(learningRate, [1]);
    network.activate([1, 0]);
    network.propagate(learningRate, [1]);
    network.activate([1, 1]);
    network.propagate(learningRate, [1]);
}

for(var i = 0; i < 10; i++){
    console.log(network.activate([0, 0])[0]);
    console.log(network.activate([0, 1])[0]);
}
