/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  return nums.sort((a,b) => {return a-b});
};

/**
 * 选择排序
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      let min = Infinity;
      let minIndex;
      for (j = i; j < nums.length; j++) {
          if (nums[j] < min) {
              min = nums[j]
              minIndex = j;
          }
      }
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
  return nums;
};

/**
 * 插入排序
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  for (let i = 1; i < nums.length; i++) {
      let temp = nums[i];
      let j = i - 1;
      for (; j >= 0; j--) {
          if (temp >= nums[j]) break;
          nums[j + 1] = nums[j]
      }
      nums[j + 1] = temp;
  }
  return nums;
};

/**
 * 冒泡排序
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  for (let i = nums.length - 1; i >= 0 ; i--) {
      for (let j = 0; j < i; j++) {
          if (nums[j] > nums[j + 1]) {
              [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
          }
      }
  }
  return nums;
};