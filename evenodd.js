var synaptic = require('synaptic');
var network = new synaptic.Architect.Perceptron(32, 64, 32, 16, 8, 4, 2, 1);

var trainer = new synaptic.Trainer(network);
var trainingOptions = {
    rate: 0.1,
    iterations: 20000,
    error: 0.005,
};

var learningRate = 0.3;
for(var i = 0; i < 100; i++){
    // trainer.train([{
    //     input: [i * 0.0001],
    //     output: [ ( i % 2 === 0 ? 1: 0) ]
    // }], trainingOptions);
    // console.log(i, i * 0.001, ( i % 2 === 0 ? 1: 0));
    network.activate([i * 0.001]);
    network.propagate(learningRate, [( i % 2 === 0 ? 1: 0)]);
}

for(var i = 0; i < 10; i++){
    console.log(network.activate([i * 0.001])[0]);
}
