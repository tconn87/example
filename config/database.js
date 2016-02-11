/* to switch between hosted and local databases,
 * just comment one out and uncomment the other.
 * the first one is remote and the second one
 * will be the local one if you install it from
 * the rsi portal.
 */
module.exports = {
  'url': 'mongodb://rsiuser:rsi4lyf3@216.105.171.51:27017/benchproject'
  //'url': 'mongodb://localhost:27017'
};