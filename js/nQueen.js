function solution10() {
  let answer = 0;
  let n = 8;
  let issued1 = Array(n).fill(false);
  let issued2 = Array(2*(n-1)+1).fill(false);  // x+y가 같은경우
  let issued3 = Array(2*(n-1)+1).fill(false);  // x-y+n-1가 같은경우

  function go(cur) {
      if (cur === n) {
          answer += 1;
          return
      }
      // x: cur, y: i
      for (let i=0; i<n; i+=1) {
          if (issued1[i] || issued2[cur+i] || issued3[cur-i+n-1]) {
              continue
          }
          issued1[i] = true;
          issued2[cur+i] = true;
          issued3[cur-i+n-1] = true;
          go(cur+1);
          issued1[i] = false;
          issued2[cur+i] = false;
          issued3[cur-i+n-1] = false;
      }
  }
  go(0);
  console.log(answer);
}

solution10();
