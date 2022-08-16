/**
 * @description Given two sorted arrays nums1 and nums2 of size m and n
 * respectively, return the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 *
 * Example 1:
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 * @see [Leetcode_link](https://leetcode.com/problems/median-of-two-sorted-arrays/)
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function findMedianSortedArrays(nums1, nums2) {
  var median;
  var mergedArr = [...nums1, ...nums2].sort((a, b) => a - b);
  const size = mergedArr.length;
  const middleSize = Math.trunc(size / 2);

  if (size % 2 === 0) {
    var numberOne = mergedArr[middleSize];
    var numberTwo = mergedArr[middleSize - 1];

    median = (numberOne + numberTwo) / 2;
  } else median = mergedArr[middleSize];

  return median;
}

console.log(findMedianSortedArrays([1, 3], [2]));
