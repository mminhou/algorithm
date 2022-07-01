/**
 * '수 고르기'
 * [1, 5, 3] 중 2개 고를때, 차이가 3이상이면서 가장 작은놈
 * 
 */

function solution() {
  const n = a.length;
  const m = 3;
  const a = [1, 5, 3];
  let mn = Number.MAX_SAFE_INTEGER;

  a.sort((x, y) => x-y);  // sorted a

  let en = 0;

  for (let st=0; st<n; st+=1) {
    while (en < n && a[en]-a[st] < m) en+=1;
    if (en === m) break;
    mn = Math.min(mn, a.slice(st, en).reduce((prev, curr) => prev+curr));
  }

  console.log(mn);
}

/**
 * '부분합'
 * n개 중 합이 m이상이 되는 것 중 가장 짧은 길이
 * 
 */

function solution2() {
  const n = 10;
  const m = 15;
  const a = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8];
  let mn = Number.MAX_SAFE_INTEGER;

  let tot = a[0];

  a.sort((x, y) => x-y);

  let en = 0;

  for (let st=0; st<n; st+=1) {
    while (en < n && tot < m) {
      en += 1;
      if (en !== n) tot += a[en];
    }
    if (en === m) break;
    mn = Math.min(mn, en-st+1);
    tot -= a[st]; 
  }
  
  if (mn > 100000) mn = 0;

  console.log(mn);
}

solution2();
