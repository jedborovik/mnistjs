
var mnist = {
  training: require('./small-training.json'),
  testing: require('./small-testing.json'),
  draw: require('./draw'),
};

if (typeof modules !== 'undefined' && module.exports) {
  module.exports = mnist;
}
if (typeof window === 'object') {
  window['mnist'] = mnist;
}
