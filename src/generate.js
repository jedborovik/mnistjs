var fs = require('fs');

var trainingData = fs.readFileSync(__dirname + '/data/train-images-idx3-ubyte');
var trainingLabels = fs.readFileSync(__dirname + '/data/train-labels-idx1-ubyte');
var testingData = fs.readFileSync(__dirname + '/data/t10k-images-idx3-ubyte');
var testingLabels = fs.readFileSync(__dirname + '/data/t10k-labels-idx1-ubyte');

var trainingFile = './training.json';
var testingFile = './testing.json';

var trainingSize = 60000;
var testingSize = 10000;
var threshold = 50;
var imageSize = 20;

var training = transform(trainingData, trainingLabels, trainingSize);
var testing = transform(testingData, testingLabels, testingSize);

fs.writeFileSync(trainingFile, JSON.stringify(training));
fs.writeFileSync(testingFile, JSON.stringify(testing));

/**
 * @param {Array} data
 * @param {Array} labels
 * @param {Number} n
 */
function transform(data, labels, n) {
  var examples = [];
  for (var image = 0; image < n; image++) {
    var pixels = [];
    for (var y = 4; y < imageSize + 4; y++) {
      for (var x = 4; x < imageSize + 4; x++) {
        pixels.push(data[(image * 28 * 28) + (x + (y * 28)) + 15]);
      }
    }

    pixels = pixels.map(pixel => pixel > threshold ? 1 : 0);
    var label = parseInt(labels[image + 8]);
    examples.push({
      input: pixels,
      output: outputForLabel(label),
      label: label,
    });
  }
  return examples;
}

/**
 * @param {Number} label
 */
function outputForLabel(label) {
  var output = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  output[label] = 1;
  return output;
}
