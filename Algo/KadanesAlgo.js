/**
 * @description:
 * Kadane's algorithm is an efficient way to calculate the maximum
 * contiguous subarray sum for a given array.
 *
 * @example:
 * KadaneAlgo([3, 5, 6, -2, 1]) should return 14.
 *
 * 14 represents the largest sum that you can calculate from contiguous
 * subarray elements (3, 5, 6).
 *
 * Time complexity O(n)
 */

function KadaneAlgo(arr) {
  // Checking if array is empty
  if (arr.length === 0) return;

  let tempSum = 0;
  let localSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i];

    if (localSum < tempSum) localSum = tempSum;
    if (tempSum < 0) tempSum = 0;
  }
  return localSum;
}

console.log(KadaneAlgo([5, 4, -1, 7, 8])); // 23

export { KadaneAlgo };
