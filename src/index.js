
var mnist = {
  training: require('./training.json'),
  testing: require('./testing.json'),
  draw: draw,
};

if (typeof modules !== 'undefined' && module.exports) {
  module.exports = mnist;
}
if (typeof window === 'object') {
  window['mnist'] = mnist;
}

/**
 * @param {Array} digit
 * @param {CanvasRenderingContext2D} context
 * @param {Number} offsetX
 * @param {Number} offsetY
 * @param {Number} color
 */
function draw(digit, context, offsetX, offsetY, color) {
  offsetX = offsetX || 0;
  offsetY = offsetY || 0;
  color = color || 0; // Default to black
  var imageSize = 20;
  var imageData = context.getImageData(offsetX, offsetY, imageSize, imageSize);
  for (var i = 0; i < digit.length; i++) {
    imageData.data[i * 4] = digit[i] * color;
    imageData.data[i * 4 + 1] = digit[i] * color;
    imageData.data[i * 4 + 2] = digit[i] * color;
    imageData.data[i * 4 + 3] = digit[i] * 255; // Make digit fully opaque
  }
  context.putImageData(imageData, offsetX, offsetY);
}
