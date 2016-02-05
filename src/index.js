
var mnist = {
  training: require('./training.json'),
  testing: require('./testing.json'),
  draw: require('./draw'),
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = mnist;
}
if (typeof window === 'object') {
  window['mnist'] = mnist;
}
