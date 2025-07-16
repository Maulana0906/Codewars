// rpoblem :
// The year is 1214. One night, Pope Innocent III awakens to find the the archangel Gabriel floating before him. Gabriel thunders to the pope:
// Gather all of the learned men in Pisa, especially Leonardo Fibonacci. In order for the crusades in the holy lands to be successful, these men must calculate the millionth number in Fibonacci's recurrence. Fail to do this, and your armies will never reclaim the holy land. It is His will.
// The angel then vanishes in an explosion of white light.
// Pope Innocent III sits in his bed in awe. How much is a million? he thinks to himself. He never was very good at math.
// He tries writing the number down, but because everyone in Europe is still using Roman numerals at this moment in history, he cannot represent this number. If he only knew about the invention of zero, it might make this sort of thing easier.
// He decides to go back to bed. He consoles himself, The Lord would never challenge me thus; this must have been some deceit by the devil. A pretty horrendous nightmare, to be sure.
// Pope Innocent III's armies would go on to conquer Constantinople (now Istanbul), but they would never reclaim the holy land as he desired.
// In this kata you will have to calculate fib(n) where:
// fib(0) := 0
// fib(1) := 1
// fib(n + 2) := fib(n + 1) + fib(n)
// Write an algorithm that can handle n up to 2000000.
// Your algorithm must output the exact integer answer, to full precision. Also, it must correctly handle negative numbers as input.
// HINT I: Can you rearrange the equation fib(n + 2) = fib(n + 1) + fib(n) to find fib(n) if you already know fib(n + 1) and fib(n + 2)? Use this to reason what value fib has to have for negative values.

//My solution :
function fib(n) {
  function fibPair(n) {
    if (n === 0) return [BigInt(0), BigInt(1)];

    const [a, b] = fibPair(Math.floor(n / 2)); // dapatkan fib(k) dan fib(k+1)
    const c = a * (BigInt(2) * b - a); // fib(2k)
    const d = a * a + b * b;           // fib(2k+1)

    return (n % 2 === 0) ? [c, d] : [d, c + d];
  }

  if (n === 0) return BigInt(0);

  const isNegative = n < 0;
  const absN = Math.abs(n);
  const [f, _] = fibPair(absN);

  return isNegative && (absN % 2 === 0) ? BigInt(-f) : BigInt(f);
}
