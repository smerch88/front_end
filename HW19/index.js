"use strict";
// Задача 1

// Дан массив целых чисел nums. Напишите функцию, которая вернет true, если какое-либо значение встречается в массиве не менее двух раз, и вернуть false, если все элементы разные.
// Пример работы
const nums = [1, 2, 3, 1];
// isContainSame(nums) // true

// const nums = [1, 2, 3, 4];
// isContainSame(nums) // false

// const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// isContainSame(nums) // true

const isContainSame = (nums) => {
  let set = new Set();

  for (let i in nums) {
    set.add(nums[i]);
  }
  return set.size !== nums.length;
};

console.log(isContainSame(nums));

// Задача 2

// Даны два массива целых чисел nums1 и nums2, вернуть массив состоящий из элементов, которые встречаются в обоих массивах. В массиве на выходе допустимо чтобы повторяющиеся значения встречались несколько раз

// Пример работы:
const nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
// getIntersection(nums1, nums2) // [2,2] или [2]

// const nums1 = [4,9,5], nums2 = [9,4,9,8,4];
// getIntersection(nums1, nums2) // [4,9]

function getIntersection(a, b) {
  let setA = new Set(a);
  let setB = new Set(b);
  let intersection = new Set([...setA].filter((x) => setB.has(x)));
  return Array.from(intersection);
}
console.log(getIntersection(nums1, nums2));
