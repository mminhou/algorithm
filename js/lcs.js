/**
 * 약간 이상한데??? 이렇게 나오면 안되는디
 */

const x = 'ACAYKP';
const y = 'BGCDFE';

const dp = Array.from({length: x.length+1}, () => Array(y.length+1).fill(0));

for (let i=1; i<x.length+1; i+=1) {
  for (let j=1; j<y.length+1; j+=1) {
    if (x[i-1] === y[j-1]) {
      dp[i][j] = dp[i-1][j-1] + 1
    } else {
      dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j])
    }
  }
}

console.log(dp[x.length][y.length]);


// const readline = require('readline');
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });
//
// let count = 2;
// const input = [];
// rl.on('line', function(line) {
//     input.push(line.split(''));    
//     count--;
//     if(count === 0) rl.close();
// }).on('close', function() {
//     const n = input[0].length;
//     const m = input[1].length;
//     const lcsArray = Array.from(Array(n + 1), () => new Array(m + 1).fill(0));
//     for(let i = 0; i < n; i++) {
//         const char = input[0][i];
//         for(let j = 0; j < m; j++) {
//             if(char === input[1][j]) {
//                 lcsArray[i + 1][j + 1] = lcsArray[i][j] + 1;
//             } else {
//                 lcsArray[i + 1][j + 1] = Math.max(lcsArray[i][j + 1], lcsArray[i + 1][j]);
//             }
//         }
//     }
//     console.log(lcsArray[n][m]);
// });