// 1. Fibonacci sequennacci term 1, term2 and term3 or the previous one, current one and the next one.
// 2. pre + current = next.
// 3. update pre and current.
// 3. under 4M, so while loop.

const fibo = [];
let termPre = 1;
let termNow = 2;
fibo.push(termPre);
fibo.push(termNow);
let termNext = 0;
let evenSum = 2;
while(termNext<4000000){
    termNext = termPre+termNow;
    fibo.push (termNext);
    if (termNext%2 ===0){evenSum+=termNext}
    termPre = termNow;
    termNow = termNext;
    console.log(fibo)
}
console.log(evenSum);