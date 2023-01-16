const middle = function(arr) {
  let middleIndex = (arr.length - 1) / 2;
  let mid = [];

  if (Number.isInteger(middleIndex)) {
    return [arr[middleIndex]]
  }
  
  mid.push(arr[Math.floor(middleIndex)]);
  mid.push(arr[Math.ceil(middleIndex)]);

  return mid;
}
module.exports = middle;