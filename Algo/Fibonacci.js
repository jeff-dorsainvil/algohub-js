/**
 * @brief A recursive solution to find the nth number of the Fibonacci
 * sequence.
 *
 * @description: The Fibonacci numbers are the numbers in the following
 * integer sequence. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …….
 * In mathematical terms, the sequence Fn of Fibonacci numbers is
 * defined by the recurrence relation Fn = Fn-1 + Fn-2
 *
 * @see [Fibonacci_numbers](https://www.geeksforgeeks.org/python-program-for-program-for-fibonacci-numbers-2/)
 *
 * @param {Integer} n - the nth number of the Fibonacci sequence you
 * want to find
 *
 * @returns {Integer} - Fibonacci of n
 */

const cache = {};

function fib(n) {
  if (n < 0) return;

  if (n === 0) cache[0] = 0;

  if (n === 1 || n === 2) cache[n] = 1;

  if (!cache[n]) cache[n] = fib(n - 1) + fib(n - 2);

  return cache[n];
}

console.log(fib(10)); // 55

export { fib };
